const form = document.querySelector('.form')
const input = document.querySelector('#input')
const todoUL= document.querySelector('.todolist')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo));
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTodo()})

function addTodo(todo){
    const todoText = input.value

    if(todo){
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){         
        }
        todoEl.innerHTML = todoText
        todoUL.appendChild(todoEl)
        input.value = ''
        updateLS()
    }
    
    
}

function updateLS(){
    todosEL = document.querySelectorAll('li')
    const todos = []

    todosEl.forEach(todoEl =>{
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}
