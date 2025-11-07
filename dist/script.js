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
    addTask(userTask);
    textBox.value = "";
    textBox.focus();
}

function addTask(newTask) {
    const task = document.createElement("li");
    task.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;
    const taskList = document.querySelector("ol");
    taskList.appendChild(task);
}
