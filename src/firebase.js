// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAa5ucD3bm5xaGvadx4Qly5_zPhlSslaUY',
  authDomain: 'testauth-a8d61.firebaseapp.com',
  projectId: 'testauth-a8d61',
  storageBucket: 'testauth-a8d61.appspot.com',
  messagingSenderId: '744795681690',
  appId: '1:744795681690:web:fe30a41447d49512424023',
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
    console.log(`${user.email} is logged in!`);
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

export { createUser, login, logout };
