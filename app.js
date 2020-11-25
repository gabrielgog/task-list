// DEFINE UI VARS

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#collection');
const clearBtn = document.querySelector('#clear-task');
const filter = document.querySelector('#filter');



// Load all event Listeners

loadEventListeners()

// Load all event Listeners

function loadEventListeners(){


    form.addEventListener('Submit', addTask)
}


// Add Task

function addTask(e){

    if(taskInput.value === ''){
        alert('Add a Task');
    }




    e.preventDefault();

}