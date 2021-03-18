import renderForm from './renderDomElements/renderForm';
import renderProjectForm from './renderDomElements/renderProjectForm';
import renderTodoList from './renderDomElements/renderTodoList';
import renderProjectOptions from './renderDomElements/renderProjectOptions';
import createTodo from './createTodo';
import { projectModule } from './factory';

renderForm();
renderProjectForm();
renderTodoList();

const title = document.getElementById('Title');
const description = document.getElementById('Description');
const dueDate = document.getElementById('Due date');
const priority = document.getElementById('priority');

const form = document.getElementById('todo-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.checkValidity() === false) {
    event.stopPropagation();
  } else {
    const project = document.getElementById('project');
    createTodo(title.value, description.value, dueDate.value,
      priority.value, parseInt(project.value, 10));
    renderTodoList();
  }
  form.classList.add('was-validated');
}, false);

const projectGroup = document.getElementById('project-group');
const projectName = document.getElementById('project-name');
const createProject = document.getElementById('create-project');

createProject.addEventListener('click', (event) => {
  event.preventDefault();
  projectModule.createProject(projectName.value);
  renderProjectOptions(projectGroup);
  alert('New project created'); // eslint-disable-line no-alert
});
