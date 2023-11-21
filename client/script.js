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

function deleteTask(){
    // Visually delete the task
    this.todos = this.todos.filter((currTodo) => currTodo != todo)

    // DELETE request to delete task on database
    fetch(`http://localhost:3000/api/tasks/${currTodo.id}`, {
        method: 'DELETE'
    }).then(response => response.json())
}