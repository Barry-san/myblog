// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApqLOR6u6CemXdzA24GtSdPmzS3tr3VW0",
  authDomain: "react-blog-redux.firebaseapp.com",
  projectId: "react-blog-redux",
  storageBucket: "react-blog-redux.appspot.com",
  messagingSenderId: "757951250989",
  appId: "1:757951250989:web:d5d7d9e057c2df222faea4",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
