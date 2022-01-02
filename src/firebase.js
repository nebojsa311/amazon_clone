// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAreQ2KhOYIC3ok6weYR9QzxKeDEng1r24",

  authDomain: "challenge-e94b1.firebaseapp.com",

  projectId: "challenge-e94b1",

  storageBucket: "challenge-e94b1.appspot.com",

  messagingSenderId: "1045295198787",

  appId: "1:1045295198787:web:1d110b7074f35192e09af6",

  measurementId: "G-V3BB3VRZ6Y"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);