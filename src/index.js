import {renderForm, renderTodoList} from './home'
import createTodo from './createTodo'

renderForm()
renderTodoList()

const title = document.getElementById('Title')
const description = document.getElementById('Description') 
const dueDate = document.getElementById('Due date') 
const priority = document.getElementById('priority')

const addTodo = document.getElementById('add-todo')

addTodo.addEventListener('click', (event)=>{
  event.preventDefault()
  createTodo(title.value, description.value, dueDate.value, priority.value)
  renderTodoList()
})
