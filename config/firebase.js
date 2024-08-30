// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNkoxzO1gupv8Tgo9T8JOO8NSgVzxcHjY",
  authDomain: "react-native-login-38e8d.firebaseapp.com",
  projectId: "react-native-login-38e8d",
  storageBucket: "react-native-login-38e8d.appspot.com",
  messagingSenderId: "54104522992",
  appId: "1:54104522992:web:a4cf11e7c97287c2488235",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
