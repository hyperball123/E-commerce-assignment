// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcH2RNeB2tP9NQv4GLDtjP2kKYSL952xI",
  authDomain: "e-commerce-a687d.firebaseapp.com",
  projectId: "e-commerce-a687d",
  storageBucket: "e-commerce-a687d.appspot.com",
  messagingSenderId: "785205022841",
  appId: "1:785205022841:web:7e636e410ff6881d0344a8",
  measurementId: "G-DN7E4CBTP9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
