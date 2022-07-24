//TODO LIST

const input = document.getElementById('input')
const todoslist = document.getElementsByClassName('todoslist')
const btn = document.getElementById('btnNewTodo')
//enter to add todo if input not empty
btn.addEventListener('click', newTodo)


const todoArray = JSON.parse(localStorage.getItem('todoArray'))

if(todoArray){
    todoArray.array.forEach(e => {
        newTodo(TODOEL)
    });
}


function newTodo(){
    if(input.value !== ''){
        //save todo
        inputVal = input.value
        //create element todo
        const todo = document.createElement('li')
        todo.classList.add('todoslist li')
        todo.innerHTML = inputVal
        console.log(todo)
        //append element do list
        todoslist.appendChild(todo)
        updateLS()
    }

}

function updateLS(){
    const allTodosNodeList = document.querySelectorAll('.todolist li')

    const todoArray = []

    allTodosNodeList.forEach(TODOEL =>
        todoArray.push(TODOEL.value))

    localStorage.setItem('Saved todos', JSON.stringify(todoArray))
}


//click on top of todo to check 
//click on top of todo twice to delete 

// const form = document.querySelectorAll('.form')

// if(inMon.text !==""){
//     ulmon.innerHTML = `<li>`+inMon.text+`</li>`
//      //mudar para adicionar um elemento na lista
// }else{
//     window.alert('Write a new todo and press enter do add')
// }




/*input.forEach(inp => {
        inp.addEventListener('click', () =>{
        if (input == ""){
            window.alert('Write a new todo and press enter do add')
        } 
        addTodo()
    })
});

function addTodo(){
    const text = input.value
    todosUL.innerHTML = `<li>`+text+`</li>`

}
const inTue = document.getElementById('in-tue')
const inWed = document.getElementById('in-wed')
const inThu = document.getElementById('in-thu')
const inFri = document.getElementById('in-fri')
const inSat = document.getElementById('in-sat')
const inSun = document.getElementById('in-sun')
*/
