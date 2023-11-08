// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getAuth} from 'firebase/auth';
 const firebaseConfig = {
  apiKey: "AIzaSyDxvcrT1bkrqdIOIr2T0cBYlRP62gbaJEk",
  authDomain: "authentication-9973.firebaseapp.com",
  projectId: "authentication-9973",
  storageBucket: "authentication-9973.appspot.com",
  messagingSenderId: "167800461839",
  appId: "1:167800461839:web:0dfb2fa018bf371353217a",
  measurementId: "G-85X8JB11EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 let auth=getAuth();

 export {app,auth};