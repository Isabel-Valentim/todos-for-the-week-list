//enter to add todo
//click on top of todo to check 
//click on top of todo twice to delete 

const form = document.querySelectorAll('.form')
const inMon = document.getElementById('in-mon')
const ulmon = document.getElementById('todosmon')
if(inMon.text !==""){
    ulmon.innerHTML = `<li>`+inMon.text+`</li>`
     //mudar para adicionar um elemento na lista
}else{
    window.alert('Write a new todo and press enter do add')
}




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
