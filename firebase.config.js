// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRyywcQhrsUbxRXUAXsBjNXGgSsk4T3c4",
  authDomain: "event-mama.firebaseapp.com",
  projectId: "event-mama",
  storageBucket: "event-mama.appspot.com",
  messagingSenderId: "982662513054",
  appId: "1:982662513054:web:bfceaa7fbe0965cc39968f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;