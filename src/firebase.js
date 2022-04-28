import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6QXPejsIaAOtAqjbUau1cElSEqNe38yc",
  authDomain: "admin-dashboard-reactjs.firebaseapp.com",
  projectId: "admin-dashboard-reactjs",
  storageBucket: "admin-dashboard-reactjs.appspot.com",
  messagingSenderId: "610239736940",
  appId: "1:610239736940:web:7db98630de1e7ac57e3c49",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
