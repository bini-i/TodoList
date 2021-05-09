import projectModule from '../src/projectModule';

describe('projectModule', () => {
  describe('#createProject', () => {
    test('it should create a new project', () => {
      const project = projectModule.createProject('new project');
      expect(project).toBe('new project');
    });
  });
  describe('#getProject', () => {
    test('it should get a project with proper ID', () => {
      expect(projectModule.getProject(1)).toBe('new project');
    });
  });
  describe('#getAllProject', () => {
    test('it should get all created projects', () => {
      expect(projectModule.getAllProject()).toStrictEqual({ 0: 'default', 1: 'new project' });
    });
  });
  describe('#loadProject', () => {
    test('it should load project from localStorage', () => {
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