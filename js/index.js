function onEditTodo() {
  alert("i am editing");
}

function onDeleteTodo() {
  alert(" i am deleting");
}

function setup() {
  const editButton = document.getElementById("edit_btn");
  const deleteBtn = document.getElementById("delete_btn");

  editButton.addEventListener("click", onEditTodo);
  deleteBtn.addEventListener("click", onDeleteTodo);

  console.log(editButton);
}

setup();
