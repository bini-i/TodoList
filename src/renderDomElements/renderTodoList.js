import { domNodeCreator, chainAppend } from '../domNodeCreator';
import projectModule from '../projectModule';
import todoModule from '../todoModule';
// import { projectModule, todoModule } from '../factory';
import renderModal from './renderModal';

export default function renderTodoList() {
  const content = document.getElementById('content');
  const todoList = domNodeCreator('div', { class: 'todo-list' });
  if (document.querySelector('.todo-list')) {
    content.removeChild(document.querySelector('.todo-list'));
  }
  const allProjects = projectModule.getAllProject();
  const keys = Object.keys(allProjects);
  keys.forEach((key) => {
    const projectId = key;

    const todos = todoModule.getProjectTodos(projectId);
    const h3 = domNodeCreator('h3', {}, allProjects[key]);
    const ul = domNodeCreator('ul', { class: 'list-group list-group-flush' });
    todos.forEach((ele) => {
      const li = domNodeCreator('li', { class: 'list-group-item' });
      const title = domNodeCreator('span', {}, ele.title);
      const description = domNodeCreator('p', {}, ele.description);
      const priority = domNodeCreator('span', {}, ele.priority);
      const group = domNodeCreator('div');
      const edit = domNodeCreator('span', { class: 'mx-2' });
      const editIcon = domNodeCreator('i', {
        class: 'fa fa-pencil-square-o', 'data-index': ele.id, 'data-toggle': 'modal', 'data-target': '#myModal', id: 'edit-icon',
      });

      editIcon.addEventListener('click', (e) => {
        renderModal(e.target.dataset.index);
        const modalTitle = document.querySelector('.modal #title');
        const modalDescription = document.querySelector('.modal #description');
        const modalDueDate = document.querySelector('.modal #dueDate');
        const modalPriority = document.querySelector('.modal #priority');
        const modalProject = document.querySelector('.modal #project');

        const updateTodo = document.getElementById('update-todo');
        updateTodo.addEventListener('click', (event) => {
          event.preventDefault();
          todoModule.updateTodo(event.target.dataset.index, modalTitle.value,
            modalDescription.value, modalDueDate.value,
            modalPriority.value, parseInt(modalProject.value, 10));
          renderTodoList();
        });
      });

      const remove = domNodeCreator('span');
      const removeIcon = domNodeCreator('i', { class: 'fa fa-times', 'data-index': ele.id });
      removeIcon.addEventListener('click', (event) => {
        todoModule.deleteTodo(event.target.dataset.index);
        renderTodoList();
      });
      chainAppend([li, title]);
      chainAppend([li, description]);
      chainAppend([li, group, priority]);
      chainAppend([li, group, edit, editIcon]);
      chainAppend([li, group, remove, removeIcon]);
      chainAppend([ul, li]);
    });
    chainAppend([content, todoList, h3]);
    chainAppend([content, todoList, ul]);
  });
}