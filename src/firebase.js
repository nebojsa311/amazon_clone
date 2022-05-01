import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAreQ2KhOYIC3ok6weYR9QzxKeDEng1r24",

  authDomain: "challenge-e94b1.firebaseapp.com",

  projectId: "challenge-e94b1",

  storageBucket: "challenge-e94b1.appspot.com",

  messagingSenderId: "1045295198787",

  appId: "1:1045295198787:web:1d110b7074f35192e09af6",

  measurementId: "G-V3BB3VRZ6Y"

};



const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };