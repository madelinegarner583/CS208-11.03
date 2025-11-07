document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-button");
    const textBox = document.getElementById("newTask");
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    addButton.addEventListener("click", function() {
        addBtnClick();
    });

    textBox.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addBtnClick();
        }
    });
});

function addBtnClick() {
    const textBox = document.getElementById("newTask");
    const userTask = textBox.value.trim();

    if (userTask !== "") {
        addTask(userTask);
    }

    textBox.value = "";
    textBox.focus();
}

function addTask(newTask) {
    const task = document.createElement("li");
    const taskList = document.querySelector("ol");
    const textBox = document.getElementById("newTask");

    task.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;
    taskList.appendChild(task);

    const doneButtons = document.querySelectorAll(".done-btn");
    const lastDoneButton = doneButtons[doneButtons.length - 1];

    lastDoneButton.addEventListener("click", removeTask);
    textBox.focus();
}

function removeTask(event) {
    const taskToRemove = event.target.parentNode;
    const list = taskToRemove.parentNode;

    list.removeChild(taskToRemove);
}
