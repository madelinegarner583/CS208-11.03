document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("add-button");
    let textBox = document.getElementById("newTask");
    let form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    textBox.focus(); //I added this here to focus textbox upon loading the page so the user does not have to click it

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
    let textBox = document.getElementById("newTask");
    let userValue = textBox.value.trim();
    textBox.focus();

    if (userValue !== "") {
        addTask(userValue);
        textBox.value = "";
        textBox.focus();
    }
}

function addTask(newTask) {
    let taskToAdd = document.createElement("li");
    taskToAdd.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn">&#10006;</button>`;
    let taskList = document.querySelector("ol");
    taskList.appendChild(taskToAdd);

    let doneButtons = document.querySelectorAll(".done-btn");
    let lastDoneButton = doneButtons[doneButtons.length - 1];
    lastDoneButton.addEventListener("click", removeTask);
}

function removeTask(event) {
    let textBox = document.getElementById("newTask");
    let taskToRemove = event.target.parentNode;
    let list = taskToRemove.parentNode;

    list.removeChild(taskToRemove);

    textBox.focus(); //focus textbox after removing item to prevent having to click into it again
}
