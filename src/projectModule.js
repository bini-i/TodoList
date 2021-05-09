export default (() => {
  let project = { 0: 'default' };
  function projectFactory(name) {
    const lastKey = Object.keys(project)[Object.keys(project).length - 1];
    project[parseInt(lastKey, 10) + 1] = name;
    localStorage.setItem('project', JSON.stringify(project))
    return name
  }
  return {
    createProject: projectFactory,
    getProject: (projectId) => project[projectId],
    getAllProject: () => Object.assign(project),
    loadProject: ()=> {
      const savedProject = JSON.parse(localStorage.getItem('project'))
      if (savedProject) {
        project = {...project, ...savedProject}
      }
      return savedProject
    }
  };
})();

