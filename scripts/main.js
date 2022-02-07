function updateCounters() {
    const total = document.getElementById("total-count");
    const totalTodos = document.getElementsByClassName("todo").length;

    total.innerHTML = totalTodos;
    // declare a variable that contains the "Total" counter element
    // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
    // update the HTML inside the counter element with the number of todos
  }
  
  updateCounters();