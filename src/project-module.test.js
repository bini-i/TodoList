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
});