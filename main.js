let ourForm = document.getElementById("ourForm");
let addTodoInputField = document.getElementById("addTodoInputField");

ourForm.addEventListener("click", function (e) {
  e.preventDefault();
  createItem(addTodoInputField.value);
});

function createItem(x) {
  let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`;
  todoList.insertAdjacentHTML("beforeend", ourHTML);
  addTodoInputField.value = "";
  addTodoInputField.focus();
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}
