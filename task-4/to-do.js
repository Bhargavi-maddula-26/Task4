// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get input value and trim whitespace
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
  
  // Create list item for the task
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";
  
  // Create a span for task text
  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  taskContent.className = "task-content";
  
  // Create a "Complete" button
  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.className = "complete-btn";
  completeButton.onclick = () => markAsComplete(taskItem);
  
  // Create a "Delete" button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = () => deleteTask(taskItem);
  
  // Append elements to the task item
  taskItem.appendChild(taskContent);
  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);
  
  // Append the task item to the task list
  taskList.appendChild(taskItem);
  
  // Clear the input field
  taskInput.value = "";
}

// Function to mark a task as complete
function markAsComplete(taskItem) {
  const taskContent = taskItem.querySelector(".task-content");
  taskContent.style.textDecoration = "line-through";
  taskContent.style.color = "gray";
}

// Function to delete a task
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

// Event listener for the "Add" button
addTaskButton.addEventListener("click", addTask);

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

