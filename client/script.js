function loadAllTodos(){

    // GET request to retrieve all tasks from database
    fetch('http://localhost:3000/api/tasks')
    .then(response => response.json())
    .then(data => {
        data.forEach(task => {
           Alpine.store('todos', todos => {
               todos.push({
                   name: task.title,
                   isComplete: task.checked,
                   _id: task._id
               });
           });
    });
    });
}

function addTask(){
    const userInput = document.getElementById('userInput').value;

    if(userInput.trim().length == 0){
        alert('Please enter a task');
        return;
    } else {

        visuallyDisplayTask(this.todos, userInput);

        // POST request to the server
        const task = {
            title: userInput,
            checked: false
        };
        fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(response => response.json())
        .then(data => {
            this.todos[this.todos.length - 1]._id = data._id;
        })
        .catch(error => {
            console.log(error);
        });

        document.getElementById('userInput').value = '';
    } 
}

function visuallyDisplayTask(todos, userInput){
    todos.push({
        name: userInput,
        isComplete: false,
        _id: ''
    });
}

function deleteTask(todo, todos){
    // Visually delete the task
    todos.splice(todo.index, 1)

    const id = todo._id;

    // DELETE request to delete task on database
    fetch(`http://localhost:3000/api/tasks/` + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => console.log(response.json()))
    .catch(error => {
        console.log(error);
    });
}
