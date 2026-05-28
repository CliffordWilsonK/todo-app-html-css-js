const tasks_array = [
  "Buy some clothes",
  "Go to school",
  "Become a billionaire",
];
const tasks_list = document.querySelector(".tasks-list");
const form = document.querySelector(".todo-add-form");
const form_input = document.querySelector("#todo-input");

const loadTasks = (tasks) => {
  localStorage.setItem("tasks", tasks);
};

const addTaskToList = () => {
  const tasks = localStorage.getItem("tasks");
  let splitted_tasks = tasks.split(",");
  splitted_tasks.forEach((task) => {
    let task_element = document.createElement("li");
    task_element.innerHTML = task;
    tasks_list.appendChild(task_element);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks_array.push(form_input.value);
  loadTasks(tasks_array);
  addTaskToList();
});

loadTasks(tasks_array);
addTaskToList();
