import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBsVzTIUUPJv1s8O0yfF9I4WmHdbCYs3bU",
  authDomain: "jobs24x7-e9768.firebaseapp.com",
  projectId: "jobs24x7-e9768",
  storageBucket: "jobs24x7-e9768.appspot.com",
  messagingSenderId: "930984697915",
  appId: "1:930984697915:web:1bc8716591138058323c1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication, Firebase Database(Firestore) and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);