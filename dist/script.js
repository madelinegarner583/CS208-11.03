document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-button");
    if (!addButton) {
        console.error("Button with ID 'add-button' not found.");
        return;
    }

    addButton.addEventListener("click", function(event) {
        event.preventDefault();
        addBtnClick();
    });
});

function addBtnClick() {
    const userTask = document.getElementById("newTask").value;
    addTask(userTask);
}

function addTask(newTask) {
    const task = document.createElement("li");
    task.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;
    const taskList = document.querySelector("ol");
    taskList.appendChild(task);
}
