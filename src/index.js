document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; 

    
    const li = document.createElement("li");
    li.textContent = taskText;

    
    taskList.appendChild(li);

    
    form.reset();
  });
});
