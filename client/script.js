function addTask(){
    const userInput = document.getElementById('userInput').value;

    if(userInput.trim().length == 0){
        alert('Please enter a task');
        return;
    } else {


        this.todos.push({
            name: userInput,
            isComplete: false
        });

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
        .catch(error => {
            console.log(error);
        });

        document.getElementById('userInput').value = '';
    } 
}

function deleteTask(id){
    // Visually delete the task
    // this.todos.splice(this.index, 1)

    // const id = this.todo.id;
    // const todo = document.getElementById("taskItem");

    // DELETE request to delete task on database
    fetch(`http://localhost:3000/api/tasks/` + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .catch(error => {
        console.log(error);
    });
}

function loadAllTodos(){

    // GET request to retrieve all tasks from database
    fetch('http://localhost:3000/api/tasks')
    .then(response => response.json())
    .then(data => {
        data.forEach(task => {
            this.todos.push({
                name: task.title,
                isComplete: task.checked
            });
        });
    })
}
