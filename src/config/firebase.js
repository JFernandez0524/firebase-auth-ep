// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

async function createUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    console.log(user);
    console.log(`${user.email} is logged in!`);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error: ${errorCode} ${errorMessage}`);
  }
}

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Signed in
    const user = userCredential.user;
    const idToken = await getIdToken(user);
    console.log(idToken);
    fetch('/auth', {
      method: 'GET',
      headers: {
        Authorization: idToken,
      },
    });
    console.log(`${JSON.stringify(user)}`);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`Error: ${errorCode} ${errorMessage}`);
  }
}

async function logout() {
  await signOut(auth);
  console.log('logged out! ');
}

// function getUserToken() {
//   getAuth()
//     .currentUser.getIdToken(/* forceRefresh */ true)
//     .then(function (idToken) {
//       // Send token to your backend via HTTPS
//       // ...
//       console.log(idToken);
//       (async function () {
//         let response = await fetch('/auth', {
//           method: 'GET',
//           headers: {
//             Authorization: idToken,
//           },
//         });
//         let text = await response.text();
//         return text;
//       })();
//     })
//     .catch(function (error) {
//       // Handle error
//       console.log(error);
//     });
// }

// function firebaseUser() {
//   onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/firebase.User
//       const uid = user.uid;
//       const idToken = await user.getIdToken();
//       // ...
//       console.log(uid);
//       return idToken;
//     } else {
//       // User is signed out
//       // ...
//       return 'Please Log In';
//     }
//   });
// }
export { createUser, login, logout, app, auth };
