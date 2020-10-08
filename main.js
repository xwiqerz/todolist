let ourForm = document.querySelector("form");
let addTodoInputField = document.querySelector("input");

addTodoInputField.focus();

ourForm.addEventListener("click", function (e) {
  e.preventDefault();
  createItem(addTodoInputField.value);
});

function createItem(x) {
  if (x == "") {
    return;
  }
  let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`;
  todoList.insertAdjacentHTML("beforeend", ourHTML);
  addTodoInputField.value = "";
  addTodoInputField.focus();
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
  addTodoInputField.focus();
}
