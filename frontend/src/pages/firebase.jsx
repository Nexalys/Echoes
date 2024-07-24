import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { error } from "pdf-lib";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFldbfdluAqTadzKXbuYvcusAoqlxKqJU",
  authDomain: "echoes-ad34e.firebaseapp.com",
  projectId: "echoes-ad34e",
  storageBucket: "echoes-ad34e.appspot.com",
  messagingSenderId: "853035279016",
  appId: "1:853035279016:web:b2782e285f89090b38589d",
  measurementId: "G-6XTYGX72PJ"
};

// Ensure Firebase is initialized only once
const app = initializeApp(firebaseConfig);

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
