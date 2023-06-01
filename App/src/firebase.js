import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBJycqXzQUIC4ZhphEYXjSXJe051bBX45g",

  authDomain: "ruinett-8f847.firebaseapp.com",

  projectId: "ruinett-8f847",

  storageBucket: "ruinett-8f847.appspot.com",

  messagingSenderId: "508876173731",

  appId: "1:508876173731:web:cf29bf3372b93c4cf3ea16"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

