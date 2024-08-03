
// const wrapper = document.querySelector(".wrapper"),
//   signupHeader = document.querySelector(".signup header"),
//   loginHeader = document.querySelector(".login header");

// loginHeader.addEventListener("click", () => {
//   wrapper.classList.add("active");
// });
// signupHeader.addEventListener("click", () => {
//   wrapper.classList.remove("active");
// });


// // Sign up handling


// window.addEventListener("load", () => {
//   if (localStorage.getItem("user")) {
//     window.location.replace("../index.html");
//   }
// });



// signUpHandling


import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  setDoc,
  signInWithEmailAndPassword,
} from "../javascript/firebase.js";

const signUpHandler = async () => {
  try {
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const fullName = document.querySelector("#fullName");
    

    // db obj
    const userObj = {
      fullName: fullName.value,
      email: email.value,
    };
    console.log("userObj", userObj);
    // firstly user signup
    const response = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value
    );
    const uid = response.user.uid;

    const userResponse = await setDoc(doc(db, "users", uid), userObj);
    alert("user successfully signup");
    window.location.href = "../HMTL/login.html";

  } catch (error) {
    console.log("error", error.message);
    alert(error.message);
  }
};



window.signUpHandler = signUpHandler;