import { domNodeCreator, chainAppend } from '../domNodeCreator';
import { projectModule } from '../projectModule';
import { todoModule } from '../todoModule';

export default (index) => {
  const body = document.querySelector('body');
  if (document.querySelector('.container')) {
    body.removeChild(document.querySelector('.container'));
  }
  const container = domNodeCreator('div', { class: 'container' });

  const modal = domNodeCreator('div', { class: 'modal', id: 'myModal' });
  const modalDialog = domNodeCreator('div', { class: 'modal-dialog' });
  const modalContent = domNodeCreator('div', { class: 'modal-content' });
  const modalHeader = domNodeCreator('div', { class: 'modal-header' });
  const modalTitle = domNodeCreator('h4', { class: 'modal-title' }, 'Edit Todo');
  const modalBody = domNodeCreator('div', { class: 'modal-body' });

  chainAppend([body, container, modal, modalDialog, modalContent]);
  chainAppend([modalContent, modalHeader, modalTitle]);
  chainAppend([modalContent, modalBody]);

  const form = domNodeCreator('form', { class: 'mb-3' });
  const todoAttr = ['title', 'description', 'dueDate'];
  todoAttr.forEach((ele) => {
    const group = domNodeCreator('div', { class: 'form-group col-md-7' });
    const input = domNodeCreator('input', {
      type: 'text', class: 'form-control', id: ele, placeholder: ele, value: todoModule.getTodo(index)[ele],
    });
    chainAppend([form, group, input]);
  });
  chainAppend([modalBody, form]);

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
  const selectProject = domNodeCreator('select', { id: 'project', class: 'form-control mr-3' });
  const projects = projectModule.getAllProject();
  const keys = Object.keys(projects);
  keys.forEach((key) => {
    const option = domNodeCreator('option', { value: key }, projects[key]);
    selectProject.appendChild(option);
  });
  selectGroupProject.appendChild(selectProject);
  chainAppend([form, selectGroupProject]);
  const updateButton = domNodeCreator('button', {
    type: 'submit', class: 'btn btn-success', id: 'update-todo', 'data-index': index, 'data-dismiss': 'modal',
  }, 'Update');

  const modalFooter = domNodeCreator('div', { class: 'modal-footer d-flex justify-content-between' });
  const closeButton = domNodeCreator('button', { type: 'button', class: 'btn btn-danger', 'data-dismiss': 'modal' }, 'Close');

  chainAppend([modalContent, modalFooter, updateButton]);
  chainAppend([modalContent, modalFooter, closeButton]);
};