// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9jjGoGQvVbcPJEOb5vIs1LoxQbT3gukA",
  authDomain: "codelab-online-learning.firebaseapp.com",
  projectId: "codelab-online-learning",
  storageBucket: "codelab-online-learning.appspot.com",
  messagingSenderId: "221908779942",
  appId: "1:221908779942:web:363969f8cf8b258d5cc567"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;