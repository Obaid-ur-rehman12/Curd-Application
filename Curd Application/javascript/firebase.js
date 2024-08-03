  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    getDoc,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCl1cb1LiDZkjAnRkbqzMYZs7vpFBtbWLY",
    authDomain: "curd-application-8d523.firebaseapp.com",
    projectId: "curd-application-8d523",
    storageBucket: "curd-application-8d523.appspot.com",
    messagingSenderId: "535557174997",
    appId: "1:535557174997:web:526baa4b54bd51f579545c"
  };

  const app = initializeApp(firebaseConfig);
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  // Initialize Auth
  const auth = getAuth();
  
  export {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setDoc,
    getDoc,
  };