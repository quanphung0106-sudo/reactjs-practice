import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC1cW_Qd6lG5sl95NctNBBjdtwo8wJS_Hw',
  authDomain: 'chat-app-2022-a9310.firebaseapp.com',
  projectId: 'chat-app-2022-a9310',
  storageBucket: 'chat-app-2022-a9310.appspot.com',
  messagingSenderId: '867880183258',
  appId: '1:867880183258:web:088adfbfec3db26c4e0ce3',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
