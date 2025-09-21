
let addTaskButton = document.getElementById('addTaskButton')
let taskDisplay = document.getElementById('task-display')

let taskList = [];

let reRenderTOODS = () => {
    taskDisplay.innerHTML = "";
    taskList.forEach((todo, index) => {
        taskDisplay.innerHTML += `
            <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow">
                <div class="flex items-center gap-2">
                    <input onCLick="handleToggleMarkAsDone(${index})" type="checkbox" ${todo.done && 'checked'} class="w-5 h-5 text-indigo-600 rounded" />
                    <p class="text-gray-800 ${todo.done && 'line-through'}">${todo.task}</p>
                </div>
                
                <button onCLick="handleClickRightBtn(${index})" class="text-sm px-3 py-1 cursor-pointer ${todo.done ? 'bg-red-500 hover:bg-red-600' : "bg-green-500 hover:bg-green-600"} text-white rounded-lg  transition">${!todo.done ? "Mark As Done" : "Delete"}</button>
            </div>`
    });
}

let loadTodos = () => {
    let storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        taskList = JSON.parse(storedTodos);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    reRenderTOODS();
})

let handleClickAddTask = () => {
    let taskName = document.getElementById('taskName').value
    if (!taskName) {
        return alert("Please Enter Task!")
    }
    taskList.push({ task: taskName, done: false })
    localStorage.setItem('todos', JSON.stringify(taskList))
    reRenderTOODS()
    document.getElementById('taskName').value = ""
}


let handleToggleMarkAsDone = (index) => {
    let todo = taskList[index]
    if (todo.done) {
        taskList[index].done = false
    } else {
        taskList[index].done = true
    }
    localStorage.setItem('todos', JSON.stringify(taskList))
    reRenderTOODS()
}

let handleDeleteTodo = (index) => {
    taskList.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(taskList))
    reRenderTOODS()
}

let handleClickRightBtn = (index) => {
    let todo = taskList[index]
    if (todo.done) {
        handleDeleteTodo(index)
    } else {
        handleToggleMarkAsDone(index)
    }
}

addTaskButton.addEventListener('click', handleClickAddTask)