import { initializeApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNkoxzO1gupv8Tgo9T8JOO8NSgVzxcHjY",
  authDomain: "react-native-login-38e8d.firebaseapp.com",
  projectId: "react-native-login-38e8d",
  storageBucket: "react-native-login-38e8d.appspot.com",
  messagingSenderId: "54104522992",
  appId: "1:54104522992:web:a4cf11e7c97287c2488235",
};

// Initialize Firebase app if not already initialized
export const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence if not already initialized
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} catch (error) {
  if (error.code === "auth/already-initialized") {
    auth = getAuth(app);
  } else {
    throw error; // rethrow any other unexpected errors
  }
}

export { auth };
