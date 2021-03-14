import {
  renderProjectOptions, renderForm, renderProjectForm, renderTodoList,
} from './home';
import createTodo from './createTodo';
import { projectModule } from './factory';


renderForm();
renderProjectForm();
renderTodoList();

const title = document.getElementById('Title');
const description = document.getElementById('Description');
const dueDate = document.getElementById('Due date');
const priority = document.getElementById('priority');

const addTodo = document.getElementById('add-todo');

addTodo.addEventListener('click', (event) => {
  const project = document.getElementById('project');
  event.preventDefault();
  createTodo(title.value, description.value, dueDate.value,
    priority.value, parseInt(project.value, 10));
  renderTodoList();
});

const projectGroup = document.getElementById('project-group');
const projectName = document.getElementById('project-name');
const createProject = document.getElementById('create-project');

createProject.addEventListener('click', (event) => {
  event.preventDefault();
  projectModule.createProject(projectName.value);
  renderProjectOptions(projectGroup);
  alert('New project created');
});
