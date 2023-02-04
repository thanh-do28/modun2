// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { setActivesScreen } from "./view/view";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd-vPtqHQuvQLXLV_oV54HUBdSo1UwDOg",
  authDomain: "shadowgame-76bff.firebaseapp.com",
  projectId: "shadowgame-76bff",
  storageBucket: "shadowgame-76bff.appspot.com",
  messagingSenderId: "61958604776",
  appId: "1:61958604776:web:db9a1b681c5de4a57a465d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

setActivesScreen("loginPage");
// loginPage
// signUpPage
// resetPage
// pickWarriors
// viewGamePage