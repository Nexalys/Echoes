import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";


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
