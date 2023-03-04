import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiEKJNR88NpUBI65ZfN-LUhs72xSqwEHw",
  authDomain: "todolist-ff8f4.firebaseapp.com",
  projectId: "todolist-ff8f4",
  storageBucket: "todolist-ff8f4.appspot.com",
  messagingSenderId: "829257560385",
  appId: "1:829257560385:web:3f216473325076cde3f1c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);