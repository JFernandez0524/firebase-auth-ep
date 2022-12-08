// import { applicationDefault, initializeApp } from 'firebase-admin/app';
// import { getAuth } from 'firebase-admin/auth';

// // Initialize Firebase
// const firebaseapp = initializeApp({
//   credential: applicationDefault(),
// });

// const auth = getAuth(firebaseapp);

// With {type: module} in the package.json...

// Import only what you need
// import { type } from '@testing-library/user-event/dist/type';
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const app = initializeApp({
  credential: applicationDefault(),
});

const auth = getAuth(app);

// const token = await auth.createCustomToken();

// const user = auth.getUser();

export { auth };
