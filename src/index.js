import renderHome from './home'
import createTodo from './createTodo'

renderHome()

const title = document.getElementById('Title')
const description = document.getElementById('Description') 
const dueDate = document.getElementById('Due date') 
const priority = document.getElementById('priority')

const addTodo = document.getElementById('add-todo')

addTodo.addEventListener('click', ()=>{
  createTodo(title.value, description.value, dueDate.value, priority.value)
})