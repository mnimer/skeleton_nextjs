import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyD9W_SAG3t_MkPblplFjBokhjt1DooQ8m8",
  authDomain: "argolis-dataide-application.firebaseapp.com",
  projectId: "argolis-dataide-application",
  storageBucket: "argolis-dataide-application.appspot.com",
  messagingSenderId: "661171380480",
  appId: "1:661171380480:web:9bfa958261b145b21153e5",
  measurementId: "G-Y8795G2NCC"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
