import projectModule from './project-module';

describe('projectModule', () => {
  describe('#createProject', () => {
    test('it creates project', () => {
      const project = projectModule.createProject('project1');
      expect(project).toBe('project1');
    });
  });
  describe('#getProject', () => {
    test('it returns project that belong to a project', () => {
      expect(projectModule.getProject(1)).toBe('project1');
    });
  });
  describe('#getAllProject', () => {
    test('it returns all projects', () => {
      expect(projectModule.getAllProject()).toEqual({ 0: 'default', 1: 'project1' });
    });
  });
  describe('#loadProject', () => {
    test('it loads projects from local storage', () => {
      const KEY = 'project';
      const VALUE = JSON.stringify([{
        id: 0,
        name: 'default',
      }]);

      localStorage.setItem(KEY, VALUE);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
      expect(projectModule.loadProject()).toEqual([{
        id: 0,
        name: 'default',
      }]);
    });
  });
});