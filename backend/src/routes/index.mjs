import express from 'express';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, initializeFirestore, setDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user_doc_ref = doc(db, "/users/SdW3Kzxi16ziIZJKEafr");

let user_doc = await getDoc(user_doc_ref);
let user_data = user_doc.data()
console.log(user_data);

user_data.firstname = "Bdikesavan";

setDoc(user_doc_ref, user_data);

user_doc = await getDoc(user_doc_ref);
user_data = user_doc.data()
console.log(user_data);
