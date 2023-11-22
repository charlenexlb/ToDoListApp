document.addEventListener('alpine:init', () => {
    Alpine.store('toDos', {
        todos: [],
        userInput: '',

        loadAllTodos(){
            // GET request to retrieve all tasks from database
        fetch('http://localhost:3000/api/tasks')
        .then(response => response.json())
        .then(data => {
            data.forEach(task => {
                if(!this.todos.some(todo => todo._id === task._id)){
                this.todos.push({
                    name: task.title,
                    completed: task.checked,
                    _id: task._id
                });
            }
            });
            });
            document.getElementById('userInput').value = '';
        },

        addTask(){
            const userInput = document.getElementById('userInput').value;
        
            if(userInput.trim().length == 0){
                alert('Please enter a task');
                userInput = '';
            } else {
        
                //Visually display the task
                this.todos.push({
                    name: userInput,
                    isComplete: false,
                    _id: ''
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
                .then(data => {
                    this.todos[this.todos.length - 1]._id = data._id;
                })
                .catch(error => {
                    console.log(error);
                });
        
                document.getElementById('userInput').value = '';
            } 
        },
        
        deleteTask(todo){
            // Visually delete the task
            this.todos.splice(todo.index, 1)
        
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
        },

        checkTask(todo){
            // PATCH request to update task on database
            fetch(`http://localhost:3000/api/tasks/` + todo._id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    checked: todo.completed
                })
            }).then(response => console.log(response.json()))
            .catch(error => {
                console.log(error);
            });
        }
        


    })
})
