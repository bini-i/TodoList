import todoModule from '../src/todoModule';

describe('todoModule', () => {
  describe('#createTodo', () => {
    test('it should create todo', () => {
      const todo = todoModule.createTodo('Meeting', 'Meet with John', '06.06.2021', 'high', 1);
      expect(todo.title).toBe('Meeting');
      expect(todo.description).toBe('Meet with John');
      expect(todo.dueDate).toBe('06.06.2021');
      expect(todo.priority).toBe('high');
      expect(todo.projectId).toBe(1);
    });
  });
  describe('#getProjectTodos', () => {
    test('it returns todos that belong to a project', () => {
      const todo1 = todoModule.createTodo('Running', 'Run 5 km', '06.06.2021', 'high', 2);
      const todo2 = todoModule.createTodo('Breakfast', 'Have a breakfast at 7 am', '06.06.2021', 'high', 3);
      expect(todoModule.getProjectTodos(0).toString).toBe([todo1].toString);
      expect(todoModule.getProjectTodos(1).toString).toBe([todo2].toString);
    });
  });

  describe('#getAllTodos', () => {
    test('it returns all todos', () => {
      expect(todoModule.getAllTodos().toString).toBe([{
        id: 0,
        title: 'Meeting',
        description: 'Meet with John',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 1,
      },
      {
        id: 1,
        title: 'Running',
        description: 'Run 5 km',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 2,
      },
      {
        id: 2,
        title: 'Breakfast',
        description: 'Have a breakfast at 7 am',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 3,
      }].toString);
    });
  });
  describe('#getTodo', () => {
    test('it returns a given todo', () => {
      expect(todoModule.getTodo(2)).toEqual({
        id: 2,
        title: 'Breakfast',
        description: 'Have a breakfast at 7 am',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 3,
      });
    });
  });

  describe('#updateTodo', () => {
    test('it updates a given todo', () => {
      expect(todoModule.updateTodo(2, 'Gym', 'Doing gym at 7 am', '06.06.2021', 'high', 1)).toEqual({
        id: 2,
        title: 'Gym',
        description: 'Doing gym at 7 am',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 1,
      });
    });
  });
  describe('#deleteTodo', () => {
    test('it deletes a given todo', () => {
      expect(todoModule.deleteTodo(2)).toEqual({
        id: 2,
        title: 'Gym',
        description: 'Doing gym at 7 am',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 1,
      });
    });
  });
  describe('#loadTodoList', () => {
    test('it loads todolists from local storage', () => {
      const KEY = 'todoList';
      const VALUE = JSON.stringify([{
        id: 0,
        title: 'Meeting',
        description: 'Meet with John',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 1,
      }]);

      localStorage.setItem(KEY, VALUE);
      expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
      expect(todoModule.loadTodoList()).toEqual([{
        id: 0,
        title: 'Meeting',
        description: 'Meet with John',
        dueDate: '06.06.2021',
        priority: 'high',
        projectId: 1,
      }]);
    });
  });
});