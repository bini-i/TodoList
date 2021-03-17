import { domNodeCreator, chainAppend } from './../domNodeCreator';

export const renderProjectForm = () => {
  const content = document.getElementById('content');
  const form = domNodeCreator('form', { class: 'mb-3' });
  const group = domNodeCreator('div', { class: 'form-group col-md-7' });
  const input = domNodeCreator('input', {
    type: 'text', class: 'form-control', id: 'project-name', placeholder: 'Project name',
  });
  chainAppend([form, group, input]);

  const createProjectButton = domNodeCreator('button', { type: 'submit', class: 'btn btn-primary', id: 'create-project' }, 'Create Project');
  form.appendChild(createProjectButton);

  chainAppend([content, form]);
};