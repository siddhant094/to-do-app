const userInput = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
const parentDiv = document.querySelector('.parentDiv');
const taskList = [];
// let delBtn = document.createElement('button');

function handleDeleteTodo(event) {
    console.log(event);
    this.parentElement.parentElement.remove();
    let arr = taskList.indexOf(this.parentElement.parentElement.innerText);
    console.log(arr);
    taskList.splice(arr, 1);
}

function checkboxSelected() {
    this.parentElement.classList.toggle('strikeText');
}

addBtn.addEventListener('click', function () {
    taskList.push(userInput.value);
    let childDiv = document.createElement('div');
    childDiv.classList.add('items');
    let todoDiv = document.createElement('div');
    childDiv.append(todoDiv);
    todoDiv.innerText = taskList[taskList.length - 1];
    parentDiv.append(childDiv);
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    childDiv.append(buttons);

    let editDiv = document.createElement('div');
    editDiv.classList.add('items');
    let editInput = document.createElement('input');
    editInput.classList.add('editInput');
    let saveBtn = document.createElement('button');
    editDiv.append(editInput, saveBtn);
    parentDiv.append(editDiv);
    editDiv.prepend(editInput);
    saveBtn.classList.add('btnStyle');
    saveBtn.innerText = 'SAVE';
    editDiv.classList.add('hidden');
    saveBtn.addEventListener('click', function () {
        let arr = taskList.indexOf(todoDiv.innerText);
        taskList.splice(arr, 1, editInput.value);
        todoDiv.innerText = editInput.value;
        childDiv.classList.toggle('hidden');
        editDiv.classList.toggle('hidden');
    })

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    childDiv.prepend(checkbox);
    checkbox.addEventListener('click', checkboxSelected);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit', 'btnStyle');
    editBtn.addEventListener('click', function () {
        childDiv.classList.add('hidden');
        editDiv.classList.remove('hidden');
    });
    let editImg = document.createElement('img');
    editImg.src = "https://img.icons8.com/material-outlined/30/000000/edit--v4.png";
    editBtn.append(editImg);
    buttons.append(editBtn);

    let delBtn = document.createElement('button');
    delBtn.classList.add('isDeleted', 'btnStyle');
    delBtn.addEventListener('click', handleDeleteTodo);
    let delImg = document.createElement('img');
    delImg.src = "https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png";
    delBtn.append(delImg);
    buttons.append(delBtn);
})

const isDeleted = document.querySelector('.isDeleted');