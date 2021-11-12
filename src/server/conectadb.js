import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCBRq4LF5LNP7utHKcE6J_tjJsYv79iGT4",
  authDomain: "trabalho-2-7733e.firebaseapp.com",
  databaseURL: "https://trabalho-2-7733e-default-rtdb.firebaseio.com",
  projectId: "trabalho-2-7733e",
  storageBucket: "trabalho-2-7733e.appspot.com",
  messagingSenderId: "215549690614",
  appId: "1:215549690614:web:94592aded61c6893d1e2d7",
  measurementId: "G-XCN5JL63E5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);