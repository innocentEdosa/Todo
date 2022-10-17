// how do we select html elements in javascript

// if the html elment has an id we can use
// const element = document.getElementById(id)
// const elementTwo = document.querySelector("#id")

function deleteTodo() {
  alert("i am deleteing");
}

function addListenersToDeleteButtons() {
  // select all the buttons with .delete__btn class.
  //remember querySelectorAll return an array (NodeList)
  // only the last element in the array is new. every other element as been existing before;
  const buttonCollection = document.querySelectorAll(".delete__btn");
  console.log(buttonCollection);
  // select the last element in the array;
  const lastButton = buttonCollection[buttonCollection.length - 1];
  lastButton.addEventListener("click", deleteTodo);
}

function showTodoOnTheScreen(todo) {
  const listOfTodo = document.querySelector("#todo__list");
  const li = document.createElement("li");
  li.classList.add("todo__section--todoItem");

  li.innerHTML = `<div>
  <input class="todo__checkbox" type="checkbox" />
  <span class="todo__text"> ${todo} </span>
  <div class="todo__actions--wrapper">
    <button id="edit_btn" class="todo__actions edit__btn">
      edit
    </button>
    <button id="delete_btn" class="todo__actions delete__btn">
      delete
    </button>
  </div>
</div>`;

  listOfTodo.appendChild(li);
  addListenersToDeleteButtons();
}

function todoFormSumbitHandler(eventObject) {
  eventObject.preventDefault();
  const inputField = document.querySelector("#todo__input");
  const todoValue = inputField.value;
  showTodoOnTheScreen(todoValue);
}

const todoForm = document.getElementById("form");
todoForm.addEventListener("submit", todoFormSumbitHandler);
