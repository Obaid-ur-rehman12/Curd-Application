window.addEventListener("load", () => {
  console.log(localStorage.getItem("user"));
  if (!localStorage.getItem("user")) {
    window.location.replace("../HMTL/login.html");
  }
});

import { addDoc,
    collection,
    db,
    deleteDoc,
    doc,
    getDocs,
    updateDoc, } from "./firebase.js"


const todoCollection = collection(db, "todos")
const todoParent = document.querySelector(".parent")
console.log("todoParent", todoParent)

const addTodo = async () => {
    try {
        const todoInput = document.getElementById("input")
        console.log("todoInput", todoInput.value)

        const todoObj = {
            value: todoInput.value
        }

        const res = await addDoc(todoCollection, todoObj)
        getTodos()
        console.log("res", res.id)
    } catch (error) {
        console.log("error", error.message)
    }
}


const getTodos = async () => {
    try {
        const querySnapshot = await getDocs(todoCollection)
        let todoArr = []

        todoParent.innerHTML = ""
        querySnapshot.forEach((doc) => {
            const obj = {
                id: doc.id,
                ...doc.data()
            }
            todoArr.push(obj)
            todoParent.innerHTML += ` <div class = "list">
                 <div>
                 <p> ${obj.value} <p>
                  <buttonn id=${obj.id} onclick="editTodo(this)" class="edititem"><i class="fas fa-pen-square"></i></button>
                  <button id=${obj.id}  onclick="deleteTodo(this)" class="delitem"><i class="fa-solid fa-trash-can"></i></button>
                 </div>
             </div>
            `
        })

    } catch (error) {
        console.log("error", error.message)
    }
}




const deleteTodo = async (ele) => {
    console.log("deleteTodo", ele.id);
    try {
      await deleteDoc(doc(db, "todos", ele.id));
      getTodos();
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const editTodo = async (ele) => {
    try {
      console.log("ele", ele.id);
      const editValue = prompt("Enter Edit Value");
      await updateDoc(doc(db, "todos", ele.id), {
        value: editValue,
      });
      getTodos();
      console.log("editValue", editValue);
    } catch (error) {
      console.log("error", error.message);
    }
  };


  
  const logoutBtn = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    window.location.replace("../HMTL/login.html");
  };
  
  window.addEventListener("load", getTodos);
  window.addTodo = addTodo;
  window.deleteTodo = deleteTodo;
  window.editTodo = editTodo;
  window.logoutBtn = logoutBtn;