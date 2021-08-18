import { domNodeCreator } from '../domNodeCreator';
import projectModule from '../project-module';

export default (selectGroupProject) => {
  let selectProject = document.getElementById('project');
  if (selectProject) {
    selectGroupProject.removeChild(selectProject);
  }

  selectProject = domNodeCreator('select', { id: 'project', class: 'form-control mr-3' });
  const projects = projectModule.getAllProject();
  const keys = Object.keys(projects);
  keys.forEach((key) => {
    const option = domNodeCreator('option', { value: key }, projects[key]);
    selectProject.appendChild(option);
  });
  selectGroupProject.appendChild(selectProject);
};