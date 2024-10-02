// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { updateProfile } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";

// const apiKey = import.meta.env.VITE_apiKey;
// const authDomain = import.meta.env.VITE_authDomain;
// const projectId = import.meta.env.VITE_projectId;
// const storageBucket = import.meta.env.VITE_storageBucket;
// const messagingSenderId = import.meta.env.VITE_messagingSendingId;
// const appID = import.meta.env.VITE_appId;
// const measurements = import.meta.env.VITE_measurements;

// const firebaseConfig = {
//   apiKey, authDomain, projectId, storageBucket, messagingSenderId, appID, measurements
// }

// // Ensure Firebase is initialized only once
// const app = initializeApp(firebaseConfig);

// // const database = getFirestore(app);
// // const collectionRef = collection(database, "users");

// export async function signupUser(email, password, username) {
//   try {
//     const auth = getAuth(app);
//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     console.log('User signed up:', userCredential);
//     const user = userCredential.user;
//     updateProfile(user, {
//       displayName: username
//     })
//     .then(() => {
//       console.log("User created and profile updated successfully!");
//     })
//     .catch((error) => {
//       console.error("Error updating profile:", error);
//     });
//   } catch (error) {
//     console.error("Error signing up:", error.message);
//     throw error;
    
//   }
//   // addDoc(collectionRef,{
//   //   email: email,
//   //   password:password
//   // }).then(()=>{
//   //   alert("user added");
//   // }).catch((err)=>{
//   //   alert(err.message);
//   // })
// }


// export async function signinUser(email, password){
//   try{
//     const auth = getAuth(app);
//     signInWithEmailAndPassword(auth, email, password).then((response)=>{
//       alert(response.user);
//     }
//     ).catch((err)=>{
//       alert(err.message)
//     })
//   }catch{
//     console.log(error.message)
//   }
// }

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { query, where, getFirestore, getDocs, collection,  addDoc,  deleteDoc,  updateDoc,  doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5DxXQfBAedHO7lGx3gSa6kHNuDr2xtW4",
  authDomain: "echoes-1a8d2.firebaseapp.com",
  projectId: "echoes-1a8d2",
  storageBucket: "echoes-1a8d2.appspot.com",
  messagingSenderId: "548750472239",
  appId: "1:548750472239:web:a3d6613a9269daa02602da",
  measurementId: "G-XQ868E4Q3C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export const db = getFirestore(app);
export const usersRef = collection(db, "users");
export const blogsRef = collection(db, "blogs");

export const addUser = async (data) => {
  try {
    await addDoc(usersRef, {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      uid: auth?.currentUser?.uid,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getNameFromUid = async (uid) => {
  try {
    const data = await getDocs(usersRef);
    var userDoc = ""
    for (let i = 0; i < data.docs.length; i++) {
      console.log(data.docs[i], data.docs[i].data().uid, uid, data.docs[i].data().email)
      if (data.docs[i].data().uid === uid) {
        userDoc = data.docs[i]; 
      }
    }
  
    console.log("document: ", userDoc)

    return {firstName: userDoc?.data().firstName};
  }catch (err) {
    console.error(err);
    return {error: err}
  }
};

export const getUserDocumentFromUid = async (uid) => {
  try {
    const data = await getDocs(usersRef);
    var userDoc=""
    for (let i = 0; i < data.docs.length; i++) {
      if (data.docs[i].data().uid === uid) {
        userDoc = data.docs[i]; 
      }
    }
    return {document: userDoc};
  }catch (err) {
    console.error(err);
    return {error: err}
  }
};



export async function SignUpUser(data){
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      updateProfile(user, {
        displayName: data.username
      })
      addUser(data);
      return {userCredential}
    }
    catch (err) {
      return {error : err.message}
    }
}

export async function SignInUser(data){
  try {
    const userCredential = await signInWithEmailAndPassword(auth, data.username, data.password);
    return {userCredential}
  }
  catch (err) {
    return {error : err.message}
  }
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user);  
      } else {
        resolve(null);  
      }
    });
  });
}


export async function checkUser() {
  const user =  await getCurrentUser();
  return user  
};

export async function getBlogsFromEmail(email) {
  try {
      const q = query(blogsRef, where("email", "==", email));
      const blogData = await getDocs(q);
      const filteredData = blogData.docs.map((doc) => ({
          ...doc.data()
      }))
      return filteredData;
  }
  catch (err) {
      console.log("Error: ", err)
  }
}