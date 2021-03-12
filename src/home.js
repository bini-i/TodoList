import {domNodeCreator, chainAppend } from './domNodeCreator'

export default () => {
    //render home page
    console.log('here')
    const content = document.getElementById('content')
    const todoList = domNodeCreator('div', {class: 'todo-list body-padding'})
    const h1 = domNodeCreator('h1', {}, 'Todo List')
    const form = domNodeCreator('form', {class: 'mb-3'})
    let arr = ['Title', 'Description', 'Due date']
    arr.forEach((ele)=>{
        const group = domNodeCreator('div', {class: 'form-group col-md-7'})
        const input = domNodeCreator('input', {type: 'text', class: 'form-control', id: ele, placeholder: ele})
        chainAppend([form, group, input])
    })

    const selectGroup = domNodeCreator('div', {class: 'form-group col-md-4'})
    const select = domNodeCreator('select', {id: "priority", class: 'form-control'}) 
    arr = ['Priority', 'Low', 'Medium', 'High']
    arr.forEach((ele)=>{
        const option = domNodeCreator('option', {}, ele)
        select.appendChild(option)
    })
    chainAppend([form, selectGroup, select])

    const button = domNodeCreator('button', {type: 'submit', class: 'btn btn-primary'}, 'Add')
    form.appendChild(button)

    const ul = domNodeCreator('ul', {class: 'list-group list-group-flush'})
    const li = domNodeCreator('li', {class: 'list-group-item'})
    const title = domNodeCreator('span', {}, 'lorem ipsum')
    const remove = domNodeCreator('span')
    const removeIcon = domNodeCreator('i', {class: 'fa fa-times'})

    chainAppend([li, title])
    chainAppend([li, remove, removeIcon])

    chainAppend([content, todoList, h1])
    chainAppend([content, todoList, form])
    chainAppend([content, todoList, ul, li])
}