import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";

const apiKey = import.meta.env.VITE_apiKey;
const authDomain = import.meta.env.VITE_authDomain;
const projectID = import.meta.env.VITE_projectID;
const storageBucket = import.meta.env.VITE_storageBucket;
const messagingSenderId = import.meta.env.VITE_messagingSendingId;
const appID = import.meta.env.VITE_appId;
const measurements = import.meta.env.VITE_measurements;

const firebaseConfig = {
  apiKey, authDomain, projectID, storageBucket, messagingSenderId, appID, measurements
}

// Ensure Firebase is initialized only once
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);
const collectionRef = collection(database, "users");

export async function signupUser(email, password, username) {
  try {
    const auth = getAuth(app);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User signed up:', userCredential);
    const user = userCredential.user;
    updateProfile(user, {
      displayName: username
    })
    .then(() => {
      console.log("User created and profile updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
    });
  } catch (error) {
    console.error("Error signing up:", error.message);
    throw error;
  }

  addDoc(collectionRef,{
    email:user.email,
    password: user.password
  }).then(()=>{
    alert("user added");
  }).catch((err)=>{
    alert(err.message);
  })
}


export async function signinUser(email, password){
  try{
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password).then((response)=>{
      console.log(response.user);
    }
    ).catch((err)=>{
      alert(err.message)
    })
  }catch{
    console.log(error.message)
  }
}
