import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlUXMeId2KCnHOID386R7fDTf1VzUmFTo",
  authDomain: "mobile-app-e37af.firebaseapp.com",
  projectId: "mobile-app-e37af",
  storageBucket: "mobile-app-e37af.appspot.com",
  messagingSenderId: "244027075373",
  appId: "1:244027075373:web:0847724b9a508db372c1a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// init services
export const db = getFirestore(app);

// collection ref
export const colRef = collection(db, "users");
// Create a new collection with a custom ID
