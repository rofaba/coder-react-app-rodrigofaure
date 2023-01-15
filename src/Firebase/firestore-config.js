import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBojAZz6v536M5bD9I4nqnTtLlzIFieV_c",
  authDomain: "react-store-coder.firebaseapp.com",
  projectId: "react-store-coder",
  storageBucket: "react-store-coder.appspot.com",
  messagingSenderId: "438029329235",
  appId: "1:438029329235:web:2dba784be833bb74bd37a6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
