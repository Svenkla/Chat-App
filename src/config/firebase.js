// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO6MvZHIPoy7rGMLCOXCHTgxSmOQ5wUdI",
  authDomain: "chatapp-3cdc6.firebaseapp.com",
  projectId: "chatapp-3cdc6",
  storageBucket: "chatapp-3cdc6.appspot.com",
  messagingSenderId: "935401719322",
  appId: "1:935401719322:web:4180bcea207561823773a3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
