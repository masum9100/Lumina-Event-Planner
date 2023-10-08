// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbJFb7hRM_plL_2jMNcmU5htRxKkHdJf0",
  authDomain: "lumina-event-planer.firebaseapp.com",
  projectId: "lumina-event-planer",
  storageBucket: "lumina-event-planer.appspot.com",
  messagingSenderId: "518325472161",
  appId: "1:518325472161:web:1f18540bc38aac4eef99e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app