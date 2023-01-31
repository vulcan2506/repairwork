// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ETQ1cBEkIKM4MfB5g_NaIar5anGsVFc",
  authDomain: "repair-11035.firebaseapp.com",
  projectId: "repair-11035",
  storageBucket: "repair-11035.appspot.com",
  messagingSenderId: "276240764630",
  appId: "1:276240764630:web:42e3e502f4835d24010377",
  measurementId: "G-4PQFCDPD2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {auth,provider,db}