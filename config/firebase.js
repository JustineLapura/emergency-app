import { initializeApp, getApps } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvwMCauhuTzfCZuCJjcILaDABBkJ8TBZI",
  authDomain: "marketplace-b165a.firebaseapp.com",
  projectId: "marketplace-b165a",
  storageBucket: "marketplace-b165a.appspot.com",
  messagingSenderId: "475008362110",
  appId: "1:475008362110:web:9da271174e6996464e5a2f",
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
r;
export { auth };
