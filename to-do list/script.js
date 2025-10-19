const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskContainer");

addBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
    
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("⚠️ Please enter a task!");
        return;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("taskItem");

    const taskContent = document.createElement("div");
    taskContent.textContent = taskText;

    
    const deleteDiv = document.createElement("div");
    deleteDiv.classList.add("deletetask");
    deleteDiv.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    
    deleteDiv.addEventListener("click", () => {
        taskDiv.remove();
    });

    
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteDiv);
    taskContainer.appendChild(taskDiv);


    taskInput.value = "";
}
