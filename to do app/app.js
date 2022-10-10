let addItem = document.getElementById("add-item")
addItem.addEventListener("click",()=>{
let todoValue = document.getElementById("todo-value")
let input = `<input type="text">${todoValue.value}</input>`

})



// let todoList =document.getElementById("todo-list")

// let addItem =document.getElementById("add-item") 
// addItem.addEventListener("click",()=>{
// let todoValue =document.getElementById("todo-value") 
// let li = `<li>${todoValue.value}<button onclick="delBtn()">Delete</button><button onclick="editBtn()">Edit</button></li>`
//     todoList.innerHTML += li
//     todoValue.value = ""
//     console.log(li);
// })

// function delBtn(e){
//  event.target.parentNode.remove()

// }
// function editBtn(e){
//     let oldValue = prompt("Enter updated value" );
   
//       event.target.parentNode.firstChild.nodeValue = oldValue;

//     }


// let deleteAll =document.getElementById("delete-all")
// deleteAll.addEventListener("click",()=>{
//     todoList.innerHTML=""
// })
