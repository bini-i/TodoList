import {domNodeCreator, chainAppend } from './domNodeCreator'
import {projectModule, todoModule} from './factory'

const renderProjectOptions = function(selectGroupProject) {
    let selectProject = document.getElementById('project')
    if(selectProject){
        selectGroupProject.removeChild(selectProject)
    }
        
    selectProject = domNodeCreator('select', {id: "project", class: 'form-control mr-3'}) 
    const projects = projectModule.getAllProject()
    for(let key in projects) {
        const option = domNodeCreator('option', {value: key}, projects[key])
        selectProject.appendChild(option)
    }
    selectGroupProject.appendChild(selectProject)
}

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

    const labelPriority = domNodeCreator('label', {for: 'priority', class: 'col-sm-2 col-form-label'}, 'Priority')
    form.appendChild(labelPriority)
    
    const selectGroupPriority = domNodeCreator('div', {class: 'form-group col-md-4'})
    const selectPriority = domNodeCreator('select', {id: "priority", class: 'form-control'}) 
    let priorityLevels = ['Not Urgent', 'Urgent']
    priorityLevels.forEach((ele)=>{
        const option = domNodeCreator('option', {}, ele)
        selectPriority.appendChild(option)
    })
    chainAppend([form, selectGroupPriority, selectPriority])

    const labelProject = domNodeCreator('label', {for: 'project', class: 'col-sm-2 col-form-label'}, 'Project')
    form.appendChild(labelProject)

    const selectGroupProject = domNodeCreator('div', {class: 'form-group col-md-4', id: 'project-group'})
    
    renderProjectOptions(selectGroupProject)
    
    chainAppend([form, selectGroupProject])

    const AddTodobutton = domNodeCreator('button', {type: 'submit', class: 'btn btn-primary', id: 'add-todo'}, 'Add Todo')
    form.appendChild(AddTodobutton)
    chainAppend([content, h1])
    chainAppend([content, form])

}

const renderModal = function() {
    const body = document.querySelector('body')
    const container = domNodeCreator('div', {class: 'container'})
    
    // domNodeCreator('h2', {}, 'Edit Todo')
    // domNodeCreator('button', {type: 'button', class: 'btn btn-primary', data-toggle: 'modal', data-target: '#myModal'}, )
    const modal = domNodeCreator('div', { class: 'modal', id: 'myModal'})
    const modalDialog = domNodeCreator('div', { class: 'modal-dialog' })
    const modalContent = domNodeCreator('div', { class: 'modal-content' })
    const modalHeader = domNodeCreator('div', { class: 'modal-header' })
    const modalTitle = domNodeCreator('h4', { class: 'modal-title' }, 'Edit Todo')
    const modalBody = domNodeCreator('div', {class: 'modal-body'})
    const modalFooter = domNodeCreator('div', {class: 'modal-footer'})
    const closeButton = domNodeCreator('button', {type: 'button', class: 'btn btn-danger', 'data-dismiss': 'modal'}, 'Close')
    chainAppend([modalContent, modalHeader, modalTitle])
    chainAppend([modalContent, modalBody])
    chainAppend([modalContent, modalFooter, closeButton])
    chainAppend([body, container, modal, modalDialog, modalContent])
    console.log(111);
}

const renderTodoList = function (){
    const content = document.getElementById('content')
    const todoList = domNodeCreator('div', {class: 'todo-list'})
    if(document.querySelector('.todo-list')){
        content.removeChild(document.querySelector('.todo-list'))
    }
    const allProjects = projectModule.getAllProject() 
    for(let key in allProjects){
        const projectId = key
        
        const todos = todoModule.getProjectTodos(projectId)
        if(!todos.length){
            continue
        }
        const h3 = domNodeCreator('h3', {}, allProjects[key])
        const ul = domNodeCreator('ul', {class: 'list-group list-group-flush'})
        todos.forEach((ele, index)=>{
            const li = domNodeCreator('li', {class: 'list-group-item'})
            const title = domNodeCreator('span', {}, ele.title)
            const description = domNodeCreator('p', {}, ele.description)
            const priority = domNodeCreator('span', {}, ele.priority)
            const group = domNodeCreator('div')
            const edit = domNodeCreator('span', {class: 'mx-2'})
            const editIcon = domNodeCreator('i', {class: 'fa fa-pencil-square-o', 'data-index': index, 'data-toggle': 'modal', 'data-target': '#myModal'})

            
            const remove = domNodeCreator('span')
            const removeIcon = domNodeCreator('i', {class: 'fa fa-times', 'data-index': index})
            removeIcon.addEventListener('click', (event)=>{
                todoModule.deleteTodo(event.target.dataset.index)
                renderTodoList()
            })
            chainAppend([li, title])
            chainAppend([li, description])
            chainAppend([li, group, priority])
            chainAppend([li, group, edit, editIcon])
            chainAppend([li, group, remove, removeIcon])
            chainAppend([ul, li])
            editIcon.addEventListener('click', () => {
                renderModal()
                // console.log('111');
            })
        })
        chainAppend([content, todoList, h3])
        chainAppend([content, todoList, ul])
    }
}

const renderProjectForm = function() {
    
    const content = document.getElementById('content')
    const form = domNodeCreator('form', {class: 'mb-3'})
    const group = domNodeCreator('div', {class: 'form-group col-md-7'})
    const input = domNodeCreator('input', {type: 'text', class: 'form-control', id: 'project-name', placeholder: 'Project name'})
    chainAppend([form, group, input])
    
    const createProjectButton = domNodeCreator('button', {type: 'submit', class: 'btn btn-primary', id: 'create-project'}, 'Create Project')
    form.appendChild(createProjectButton)
    
    chainAppend([content, form])
}

export {renderProjectOptions, renderForm, renderTodoList, renderProjectForm}