let editButton;
let deleteButton;
let form;
let todoListWrapper;
let todoInputField;
let collectDeleteButton;
let collectEditButton;
let collectUpdateButton;


function show() {
    alert("I am being click");
}

function todoListItems(todo) {
    let li = document.createElement("li");
        li.innerHTML = `
        <div> 
            <input type="checkbox" class="check-input">
            <span class="text">${todo}</span>
            <div class="edit-todo hidden">
                <input class="text" type="text" value="${todo}">
                <button type="button" class="action-btn update-btn" id="update">update</button>
            </div>
            <div class="btn-container">
                <button type="button" class="action-btn edit-btn" id="edit">edit</button>
                <button type="button" class="action-btn delete-btn" id="delete">delete</button>
            </div>
        </div>
        `
    li.classList.add("todo-list");
    todoListWrapper.appendChild(li);
}

function onFormSubmit(event) {
    event.preventDefault();
    const todoValue = todoInputField.value;
    todoInputField.value = '';
    todoListItems(todoValue);
    addButtonEventListeners();
    //console.log(addEventToDeleteButtons(todoValue)); 
}

function editTodo(e) {
    let buttonContainer = e.target.parentNode
    let editInputContainer = e.target.parentNode.previousElementSibling
    let spanItem = editInputContainer.previousElementSibling
    buttonContainer.classList.add('hidden')
    spanItem.classList.add('hidden')
    editInputContainer.classList.remove('hidden')
}

function updateTodoItem(e) {
    let updateBtn = e.target
    let updateValue = updateBtn.previousElementSibling.value
    let btnParent = updateBtn.parentNode
    let spanItem = btnParent.previousElementSibling
    spanItem.innerText = updateValue
    spanItem.classList.remove('hidden')
    btnParent.nextElementSibling.classList.remove('hidden')
    btnParent.classList.add('hidden')
}

function deleteTodo(e) {
    let divParent = getButtonParent(e.target)
    divParent.remove()
}

function getButtonParent(button) {
    return button.parentNode.parentNode
}

function addButtonEventListeners() {
    collectDeleteButton = document.getElementsByClassName("delete-btn");
    collectEditButton = document.getElementsByClassName("edit-btn");
    collectUpdateButton = document.getElementsByClassName("update-btn");
    //console.log(collectDeleteButton);
    collectDeleteButton[collectDeleteButton.length - 1].addEventListener("click", deleteTodo);
    collectEditButton[collectEditButton.length - 1].addEventListener("click", editTodo);
    collectUpdateButton[collectUpdateButton.length - 1].addEventListener("click", updateTodoItem);
}

function setup() {
    editButton = document.getElementById('edit');
    deleteButton = document.getElementById('delete');
    form = document.getElementById("form");
    todoListWrapper = document.getElementById("todo-list-wrapper");
    todoInputField = document.getElementById("todo-input");

    
    
   form.addEventListener("submit", onFormSubmit);
   
}
setup();
              
   /*function submitHandler(e) {
    e.preventDefault();
    let todoInputField = document.getElementById("todo-input");
    let todoValue = todoInputField.value;
    todoListItems(todoValue);
    todoInputField.value = '';
}
let form = document.getElementById("form");

function todoListItems(todo) {
    let todoListWrapper = document.getElementById("todo-list-wrapper");
    let li = document.createElement("li");
    li.innerText = todo;
    todoListWrapper.appendChild(li);
}
form.addEventListener("submit", submitHandler);*/
