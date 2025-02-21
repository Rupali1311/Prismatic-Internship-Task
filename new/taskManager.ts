
const taskManager = {
    user: "John Doe",
    tasks: [
        { 
            name: "Complete project report", 
            status: "pending" 
        },
        { 
            name: "Attend team meeting", 
            status: "completed" 
        },
        { 
            name: "Do changes in project", 
            status: "pending" 
        }
    ]
};

// 1. Print all tasks assigned to the user
console.log("Tasks assigned to the user:");
taskManager.tasks.forEach(task => {
    console.log("Task: ",task.name, "Status: ", task.status);
});

// 2. Add a new task to the list dynamically
const newTask = { name: "Prepare presentation", status: "pending" };
taskManager.tasks.push(newTask);
console.log("New task added successfully!");
console.log("Updated Task List:");
taskManager.tasks.forEach(task => {
    console.log("Task: ",task.name, "Status: ", task.status);
});

// 3. Remove a task by name
const taskToRemove = "Do changes in project";
taskManager.tasks = taskManager.tasks.filter(task => task.name !== taskToRemove);

console.log("Task removed successfully!");
console.log("Updated Task List:");
taskManager.tasks.forEach(task => {
    console.log("Task: ",task.name, "Status: ", task.status);
});
