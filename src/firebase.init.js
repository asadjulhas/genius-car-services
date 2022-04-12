// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUyXtZIDAj28vqekarXAsyNeGumCgvMyo",
  authDomain: "genius-car-services-f777e.firebaseapp.com",
  projectId: "genius-car-services-f777e",
  storageBucket: "genius-car-services-f777e.appspot.com",
  messagingSenderId: "621590065020",
  appId: "1:621590065020:web:475260b35e870f41dcbef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
