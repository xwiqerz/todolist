let addTodoForm = document.querySelector("form");
let addTodoInputField = document.querySelector("input");

addTodoInputField.focus();

addTodoForm.addEventListener("click", function (blockDefault) {
  blockDefault.preventDefault();
  createItem(addTodoInputField.value);
});

function createItem(newItem) {
  if (newItem == "") {
    return;
  }
  let printItems = `<li>${newItem} <button onclick="deleteItem(this)">Delete</button></li>`;
  todoList.insertAdjacentHTML("beforeend", printItems);
  addTodoInputField.value = "";
  addTodoInputField.focus();
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
  addTodoInputField.focus();
}
