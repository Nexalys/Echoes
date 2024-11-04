import express from 'express';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, initializeFirestore, setDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
console.log("User data: ",user_data);


// need to create an api endpoint that will handle these functions and connect them to the frontend
const auth = getAuth();

export async function signUpWithEmail(data) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;
        const userDocRef = doc(db, 'users', user.uid);

        const userData = {
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            username: data.username,
            bio: '',
            blogs: [],
            bookmarks: [],
            date_joined: serverTimestamp(),
            follower_count: 0,
            followers: [],
            following_count: 0,
            profile_pic: '',
        };

        await setDoc(userDocRef, userData);
        return { user };

    } catch (error) {
        console.error("Error registering user:", error);
        return { errorCode: error.code, errorMessage: error.message };
    }
}
  
  export async function signInWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        return { errorCode: error.code, errorMessage: error.message };
      });
  }
  
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);
  
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          bio: "",
          blogs: [],
          bookmarks: [""],
          date_joined: serverTimestamp(),
          email: user.email,
          firstname: user.displayName.split(" ")[0] || "",
          lastname: user.displayName.split(" ")[1] || "",
          follower_count: 0,
          followers: [""],
          following_count: 0,
          profile_pic: user.photoURL || "",
          username: user.displayName || "",
        });
      }
  
      return { user };
    } catch (error) {
      console.error("Error signing in with Google:", error);
      return {
        errorCode: error.code,
        errorMessage: error.message,
        email: error.customData?.email,
        credential: GoogleAuthProvider.credentialFromError(error),
      };
    }
  }