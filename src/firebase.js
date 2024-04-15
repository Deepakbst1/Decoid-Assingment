// Time is less because of this i can't use firebase here, you can check my cv i use my firebase (podcast)


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh9s5FoJnwIXXex2VoMtgr0TS_xx8dLM",
//   authDomain: "",
//   projectId: "",
  storageBucket: "",
  messagingSenderId: "137929013935",
  appId: "1:137929013935:web:a6af04efed018434fa325a",
  measurementId: "G-S1LSELS1L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };