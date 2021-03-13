import {domNodeCreator, chainAppend } from './domNodeCreator'
import {todoModule} from './factory'

const renderForm = function (){
    const content = document.getElementById('content')
    
    const h1 = domNodeCreator('h1', {}, 'Todo List')
    const form = domNodeCreator('form', {class: 'mb-3'})
    let todoAttr = ['Title', 'Description', 'Due date']
    todoAttr.forEach((ele)=>{
        const group = domNodeCreator('div', {class: 'form-group col-md-7'})
        const input = domNodeCreator('input', {type: 'text', class: 'form-control', id: ele, placeholder: ele})
        chainAppend([form, group, input])
    })

    const selectGroup = domNodeCreator('div', {class: 'form-group col-md-4'})
    const select = domNodeCreator('select', {id: "priority", class: 'form-control'}) 
    let priorityLevels = ['Priority', 'Low', 'Medium', 'High']
    priorityLevels.forEach((ele)=>{
        const option = domNodeCreator('option', {}, ele)
        select.appendChild(option)
    })
    chainAppend([form, selectGroup, select])

    const button = domNodeCreator('button', {type: 'submit', class: 'btn btn-primary', id: 'add-todo'}, 'Add')
    form.appendChild(button)
    chainAppend([content, h1])
    chainAppend([content, form])

}

const renderTodoList = function (){
    const content = document.getElementById('content')
    const todoList = domNodeCreator('div', {class: 'todo-list'})
    if(document.querySelector('.todo-list')){
        content.removeChild(document.querySelector('.todo-list'))
    }
    const ul = domNodeCreator('ul', {class: 'list-group list-group-flush'})
    todoModule.getTodos().forEach((ele, index)=>{
        const li = domNodeCreator('li', {class: 'list-group-item'})
        const title = domNodeCreator('span', {}, ele.title)
        const remove = domNodeCreator('span')
        const removeIcon = domNodeCreator('i', {class: 'fa fa-times', 'data-index': index})
        removeIcon.addEventListener('click', (event)=>{
            todoModule.deleteTodo(event.target.dataset.index)
            renderTodoList()
        })
        chainAppend([li, title])
        chainAppend([li, remove, removeIcon])
        chainAppend([ul, li])
    })

    chainAppend([content, todoList, ul])
}

export {renderForm, renderTodoList}