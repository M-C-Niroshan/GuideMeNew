// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCm6u8XdnZcMlJtKYLGXUCXhrDY8zfeQtw",
  authDomain: "guideme-bfc31.firebaseapp.com",
  projectId: "guideme-bfc31",
  storageBucket: "guideme-bfc31.appspot.com",
  messagingSenderId: "799727387148",
  appId: "1:799727387148:web:8940156a8b5f3d7463e429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
