// import { addDoc, app, collection, db, getDocs, doc, updateDoc } from "../javascript/firebase.js"



// async function formSubmit() {
//     console.log("formSubmit()")
//     const obj = {
//         userName: "Obaid"
//     }
//     // const userCollection = collection(db, "users")
//     // addDoc(
//     //     userCollection, obj
//     // )
//     try {
//         const docRef = await addDoc(collection(db, "users"), obj);
//         console.log(docRef, "docRef")
//     } catch (error) {
//         console.log("error", error.message)
//     }


// }

// const editForm = async () => {
//     try {
//         const userCollection = doc(db, "users", "8Y29Xl9GDsUWfp7bTNNN")
//         await updateDoc(userCollection, {
//              userName: "Obaid"
//         })

//     } catch (error) {
//         console.log("error editForm ", error.message)
//     }
// }






// window.addEventListener("load", async () => {
//     try {
//         const querySnapshot = await getDocs(collection(db, "users"))
//         querySnapshot.forEach((doc) => {
//             console.log("doc", doc.data())
//         })

//     } catch (error) {

//     }
// })





// window.formSubmit = formSubmit
//  window.editForm = editForm