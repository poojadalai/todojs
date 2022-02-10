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

  function createTodo(title, color, date) {
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
    const labelText = document.createTextNode(" " + title + "  Deadline:" + date);

    //add color to label
    label.style.color = color;
    
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
  
    document.querySelector('form').addEventListener("submit", function addNewTodo(event) {
 
    event.preventDefault();
    const inputField = document.querySelector("#new-todo");
    const inputColor = document.querySelector("#todo-color");
    const deadline = document.querySelector("#deadline");
    const newTodoTitle = inputField.value;
    const newTodoColor = inputColor.value;
    const deadlineDate = deadline.value;
    
    createTodo(newTodoTitle, newTodoColor, deadlineDate)


    // reset the value of the inputField to make it empty and
    inputField.innerHTML = "";
    // ready to create new todos
    inputField.value = null;

    updateCounters();
  });

  
  function cleanUpDoneTodos() {
    // get all the "done" items

    const doneItems = document.querySelectorAll(".completed")
  
    // loop through the "done" todo items
    for (let i = 0; i < doneItems.length; i++) {
      // and remove them from the DOM
        doneItems[i].remove();
    }
  
    updateCounters();
  }
  
  // retrieve the link
  const link = document.getElementById('clean-up')
  
  // add an event listener for a click on the link to the cleanUpDoneTodos function
  link.addEventListener("click", cleanUpDoneTodos);