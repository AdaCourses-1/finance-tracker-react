// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn0MoO8Zf0iKx5GDIYdykYP9Hwq2BFt_4",
  authDomain: "finance-tracker-fa897.firebaseapp.com",
  projectId: "finance-tracker-fa897",
  storageBucket: "finance-tracker-fa897.appspot.com",
  messagingSenderId: "994967641711",
  appId: "1:994967641711:web:3f642c8e41d0d3b956b79a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Иниализация проекта Firebase

const db = getFirestore(); // Инициализация базы данных Firestore
const auth = getAuth(app); // Инициализация системы верификации

export { db, auth };
