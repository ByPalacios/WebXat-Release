import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "apiKey",

  authDomain: "authDomain",

  projectId: "projectId",

  storageBucket: "storageBucket",

  messagingSenderId: "messagingSenderId",

  appId: "appId"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

