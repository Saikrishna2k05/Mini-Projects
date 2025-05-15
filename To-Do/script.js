const addBtn=document.getElementById("addBtn");
let input=document.getElementById("input");
addBtn.addEventListener('click', ()=>{
    let userInput = input.value;
    if(userInput=="") {alert("Please enter a task before adding")}
else{
    addTodo(userInput);
    input.value="";
    renumberTodos();
    }
})
function addTodo(data){
    let parentNode=document.getElementById("todos");
    let parentDiv=document.createElement("div");
    parentDiv.className="todo";
    parentNode.appendChild(parentDiv);
    let pTag=document.createElement("p");
    pTag.innerHTML = `${noOfTodos()}. ${data}`;
    let deleteBtn=document.createElement("button");
    deleteBtn.innerHTML="Delete";
    deleteBtn.className="delete";
    parentDiv.appendChild(pTag);
    parentDiv.appendChild(deleteBtn);
}

function renumberTodos(){
    let allTodos=document.querySelectorAll("#todos .todo p");
    allTodos.forEach((pTag, index)=>{
        let text=pTag.innerHTML.split('.').slice(1).join('.').trim() ;
        pTag.innerHTML=`${index+1}.${text}`;
    })

}

function noOfTodos() {
    return document.querySelectorAll("#todos .todo p").length + 1; 
}

document.getElementById("todos").addEventListener('click',(event)=>{
    if(event.target.classList.contains("delete"))
    {
        event.target.parentElement.remove();
        renumberTodos();
    }
})

