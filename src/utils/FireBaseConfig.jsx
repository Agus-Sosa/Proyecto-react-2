// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfQXOLulYipkwfxp_MgQzSEt3iSAdYnDM",
    authDomain: "ecommerce-2-bde2d.firebaseapp.com",
    projectId: "ecommerce-2-bde2d",
    storageBucket: "ecommerce-2-bde2d.appspot.com",
    messagingSenderId: "705769382151",
    appId: "1:705769382151:web:a7ad5f43dc2f93b14c65a2"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);
