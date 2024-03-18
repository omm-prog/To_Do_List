// script.js
const taskInput = document.getElementById('task-input');
const listContainer = document.getElementById('list-container');

function addTask() {
    const taskName = taskInput.value.trim(); // Remove leading and trailing whitespaces
    if (taskName === "") {
        alert('Please enter a task name');
    } else {
        const li = document.createElement('li');
        li.textContent = taskName; // Use textContent to set text without interpreting HTML
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    taskInput.value = "";
    savedata(); // Clear the input field after adding the task
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata();
    }

},false);

function savedata(){
    localStorage.setItem("mytasks",listContainer.innerHTML);
}
function showTaskList(){
    listContainer.innerHTML = localStorage.getItem("mytasks");
}
showTaskList();