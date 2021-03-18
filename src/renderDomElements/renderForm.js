import { domNodeCreator, chainAppend } from '../domNodeCreator';
import renderProjectOptions from './renderProjectOptions';

export default () => {
  const content = document.getElementById('content');

  const h1 = domNodeCreator('h1', {}, 'Todo List');
  const form = domNodeCreator('form', { class: 'mb-3 needs-validation', id: 'todo-form', novalidate: 'novalidate' });
  const todoAttr = ['Title', 'Description', 'Due date'];
  todoAttr.forEach((ele) => {
    const group = domNodeCreator('div', { class: 'form-group col-md-7' });
    const input = domNodeCreator('input', {
      type: 'text', class: 'form-control', id: ele, placeholder: ele, required: 'required',
    });
    const inValidFeedback = domNodeCreator('div', { class: 'invalid-feedback' }, 'Please fill out this field.');
    chainAppend([form, group, input]);
    chainAppend([form, group, inValidFeedback]);
  });

  const labelPriority = domNodeCreator('label', { for: 'priority', class: 'col-sm-2 col-form-label' }, 'Priority');
  form.appendChild(labelPriority);

  const selectGroupPriority = domNodeCreator('div', { class: 'form-group col-md-4' });
  const selectPriority = domNodeCreator('select', { id: 'priority', class: 'form-control' });
  const priorityLevels = ['Not Urgent', 'Urgent'];
  priorityLevels.forEach((ele) => {
    const option = domNodeCreator('option', {}, ele);
    selectPriority.appendChild(option);
  });
  chainAppend([form, selectGroupPriority, selectPriority]);

  const labelProject = domNodeCreator('label', { for: 'project', class: 'col-sm-2 col-form-label' }, 'Project');
  form.appendChild(labelProject);

  const selectGroupProject = domNodeCreator('div', { class: 'form-group col-md-4', id: 'project-group' });

  renderProjectOptions(selectGroupProject);

  chainAppend([form, selectGroupProject]);

  const AddTodobutton = domNodeCreator('button', { type: 'submit', class: 'btn btn-primary', id: 'add-todo' }, 'Add Todo');
  form.appendChild(AddTodobutton);
  chainAppend([content, h1]);
  chainAppend([content, form]);
};