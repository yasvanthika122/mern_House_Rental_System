// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDQOevPfv1kFBAMFNxaKKeFobt8ZvNN9s",
  authDomain: "mern-estate-a0420.firebaseapp.com",
  projectId: "mern-estate-a0420",
  storageBucket: "mern-estate-a0420.appspot.com",
  messagingSenderId: "613466407636",
  appId: "1:613466407636:web:31c0a8c923cfa01e3f7141",
  measurementId: "G-551XH6LN7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);