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
            isComplete: false
        };
        fetch('http://localhost:3000/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(response => response.json())
        // .then(data => {
        //     document.getElementById('userInput').value = '';
        //     getTasks();
        // })
        .catch(error => {
            console.log(error);
        });

        document.getElementById('userInput').value = '';
    }
}