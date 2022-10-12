import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD_USbV8sHVskfM_wu9AJbAwK7DaVe-qfE',
  authDomain: 'clone-app-9c20a.firebaseapp.com',
  projectId: 'clone-app-9c20a',
  storageBucket: 'clone-app-9c20a.appspot.com',
  messagingSenderId: '646796080031',
  appId: '1:646796080031:web:88b8f786d369337c11c3aa',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
