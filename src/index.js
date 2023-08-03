import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


export const firebaseConfig = {
    apiKey: "AIzaSyA6u-bXuKid2rIGVAxB51ArJoZW49ATjVE",
    authDomain: "hotel-reservation-ba00c.firebaseapp.com",
    projectId: "hotel-reservation-ba00c",
    storageBucket: "hotel-reservation-ba00c.appspot.com",
    messagingSenderId: "993008328111",
    appId: "1:993008328111:web:db1721acdc75f49e6d235a",
    measurementId: "G-SB808HPB7Z"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
 

ReactDOM.render(
  
 <App/>,

document.getElementById("root")
)
