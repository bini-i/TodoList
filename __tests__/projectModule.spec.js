import projectModule from '../src/projectModule'

describe('projectModule', ()=> {
  describe('#createProject', ()=> {
    test('it should create a new project', ()=> {
      const project = projectModule.createProject('new project')
      expect(project).toBe('new project')
    })
  })
  describe('#getProject', ()=> {
    test('it should get a project with proper ID', ()=> {
      const project2 = projectModule.createProject('new project2')
      expect(projectModule.getProject(2)).toBe('new project2')
    })
  })
  describe('#getAllProject', ()=> {
    test('it should get all created projects', ()=> {
      expect(projectModule.getAllProject()).toStrictEqual({'0': "default", '1': "new project", '2': "new project2"})
    })
  })
  describe('#loadProject', ()=> {
    test('it should load project from localStorage', ()=> {
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
    })
  })
})