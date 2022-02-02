const userInput = document.querySelector('#input');
const addBtn = document.querySelector('#addBtn');
addBtn.classList.add('button', 'is-info'); //'is-rounded');
const parentDiv = document.querySelector('.parentDiv');
const taskList = [];

function handleDeleteTodo() {
    this.parentElement.parentElement.remove();
    let arr = taskList.indexOf(this.parentElement.parentElement.innerText);
    taskList.splice(arr, 1);
}

function checkboxSelected() {
    this.nextSibling.classList.toggle('strikeText');
}

addBtn.addEventListener('click', function () {
    taskList.push(userInput.value);
    let childDiv = document.createElement('div');
    childDiv.classList.add('level', 'items', 'box', 'column', 'is-two-thirds');
    let todoDiv = document.createElement('div');
    childDiv.append(todoDiv);
    todoDiv.innerText = taskList[taskList.length - 1];
    parentDiv.append(childDiv);
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');
    childDiv.append(buttons);

    let editDiv = document.createElement('div');
    editDiv.classList.add('level', 'items', 'box', 'column', 'is-two-thirds');
    let editInput = document.createElement('input');
    editInput.classList.add('editInput', 'input');
    editInput.value = userInput.value;
    let saveBtn = document.createElement('button');
    editDiv.append(editInput, saveBtn);
    parentDiv.append(editDiv);
    editDiv.prepend(editInput);
    saveBtn.classList.add('button', 'is-primary', 'is-light');
    saveBtn.innerHTML = '<i class="far fa-save"></i>';
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
    checkbox.classList.add('checkbox');
    childDiv.prepend(checkbox);
    checkbox.addEventListener('click', checkboxSelected);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit', 'button', 'is-warning', 'is-light');
    editBtn.innerHTML = '<i class="far fa-edit"></i>';
    editBtn.addEventListener('click', function () {
        childDiv.classList.add('hidden');
        editDiv.classList.remove('hidden');
    });
    buttons.append(editBtn);

    let delBtn = document.createElement('button');
    delBtn.classList.add('isDeleted', 'button', 'is-danger', 'is-light');
    delBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    delBtn.addEventListener('click', handleDeleteTodo);
    buttons.append(delBtn);
    userInput.value = '';
})

const isDeleted = document.querySelector('.isDeleted');