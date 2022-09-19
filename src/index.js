// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActiveScreen } from "./view/index";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzY8gJ9Gd9xsdr7_fuOO16pxD_zGAj3wk",
  authDomain: "bale-14ed4.firebaseapp.com",
  projectId: "bale-14ed4",
  storageBucket: "bale-14ed4.appspot.com",
  messagingSenderId: "809087788873",
  appId: "1:809087788873:web:79781e3228bd18e4495c98",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

// setActiveScreen("chatPage");
// setActiveScreen("registerPage");
// setActiveScreen("resetPasswordPage");
setActiveScreen("loginPage");
