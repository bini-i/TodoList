import renderHome from './home.js'
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
}

let example = new Todo("job", "solve", "13-03-21", "medium")
console.log(example.title);
console.log(example);

// create a project array. array should contains of todo objects. it will be a default project. when user creates a todo, the todo will automatically will be inside of the default project. user can create a new project and todos inside of it.

const defaultProject = []
// if (!projectName) {  //there is no project name/ user not created any project
//   defaultProject.push(new Todo) //created todos by user should be pushed to defaultProject
// }

console.log('index.js')
renderHome()

// const title = document.getElementById('Title')
// const description = document.getElementById('Description')
// const dueDate = document.getElementById('Due date')
// const priority = document.getElementById('priority')

// const addButton = document.querySelector('.btn-primary')
// addButton.addEventListener('click', () => {
//   const newTodo = new Todo(title.value, description.value, dueDate.value, priority.value)
//   defaultProject.push(newTodo)
// })

// console.log(defaultProject)