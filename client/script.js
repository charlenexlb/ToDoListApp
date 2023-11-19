const addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addNewTask());

function addNewTask(){
    var tasklist = document.getElementById("tasklist");
    var li = document.createElement("li");
    tasklist.appendChild(li);
}