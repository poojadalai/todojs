  function updateCounters() {
     // Total number of todos
    const totalCount = document.getElementById("total-count");
    const totalTodos = document.getElementsByClassName("todo").length;
    totalCount.innerHTML = totalTodos;

    // Total number of completed todos
    const completedCount = document.getElementById("completed-count");
    const completedTodos = document.getElementsByClassName("completed").length;
    completedCount.innerHTML = completedTodos;

    // Total number of uncompleted todos
    const todoCount = document.getElementById("todo-count");
    const uncompletedTodos = totalTodos - completedTodos;
    todoCount.innerHTML = uncompletedTodos;
  }
  

  function toggleDone(event) {
    // get the checkbox from the event object
    const checkbox = event.currentTarget;

    if (checkbox.checked) {
      // change the checkbox so that it shows up as completed
      checkbox.parentElement.parentElement.className = "todo completed"
    } else {
      // change the checkbox so that it shows up as todo
      checkbox.parentElement.parentElement.className = "todo";
    }
  
    // update the counters, now that we have updated the checkbox
    updateCounters();
  }
  

  // add a "change" event listener to every checkbox,
  const checkboxes = document.querySelectorAll('.todo input');

  // and use the "toggleDone" function as the callback

  for(let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("change", toggleDone);
  }
  updateCounters();

  function createTodo(title) {
    // create a label
    const label = document.createElement('label');

    // create a checkbox

    const checkbox = document.createElement('input')
    checkbox.type = "checkbox";
    checkbox.checked = false;

    // add the "change" event listener to the checkbox
    checkbox.addEventListener("change", toggleDone);

    // and append the checkbox to the label
    label.appendChild(checkbox);

    // create a text node with the given title
    const labelText = document.createTextNode(" " + title);
    
    // and append the text node to the label
    label.appendChild(labelText);

    // create a list item
    const listItem = document.createElement("li");

    // and append the label to list item
    listItem.appendChild(label);

    // append the list item to the todo list
    const list = document.getElementById("todolist");
    list.appendChild(listItem);

  }
  
  const form = document.querySelector('form');

  form.addEventListener("submit", function addNewTodo(event) {
    event.preventDefault();
    const inputField = document.querySelector("#new-todo");
    const newTodoTitle = inputField.value;
    createTodo(newTodoTitle)

    // reset the value of the inputField to make it empty and
    inputField.innerHTML = "";
    // ready to create new todos
    inputField.value = null;

    updateCounters();
  });

