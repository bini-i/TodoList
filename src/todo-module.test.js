import todoModule from './todo-module';

describe('todoModule', () => {
  describe('#createTodo', () => {
    test('it creates todos', () => {
      const todo = todoModule.createTodo('todo1 title', 'todo description', '21/2/21', 'high');
      expect(todo.title).toBe('todo1 title');
      expect(todo.description).toBe('todo description');
      expect(todo.dueDate).toBe('21/2/21');
      expect(todo.priority).toBe('high');
      expect(todo.projectId).toBe(0);
    });
  });
  describe('#getProjectTodos', () => {
    test('it returns todos that belong to a project', () => {
      const todo1 = todoModule.createTodo('todo2 title', 'todo description', '21/2/21', 'high');
      const todo2 = todoModule.createTodo('todo3 title', 'todo description', '21/2/21', 'high', 1);
      expect(todoModule.getProjectTodos(0).toString).toBe([todo1].toString);
      expect(todoModule.getProjectTodos(1).toString).toBe([todo2].toString);
    });
  });

  describe('#getAllTodos', () => {
    test('it returns all todos', () => {
      expect(todoModule.getAllTodos().toString).toBe([{
        id: 0,
        title: 'todo1 title',
        description: 'todo description',
        dueDate: '21/2/21',
        priority: 'high',
        projectId: 0,
      },
      {
        id: 1,
        title: 'todo2 title',
        description: 'todo description',
        dueDate: '21/2/21',
        priority: 'high',
        projectId: 0,
      },
      {
        id: 2,
        title: 'todo3 title',
        description: 'todo description',
        dueDate: '21/2/21',
        priority: 'high',
        projectId: 1,
      }].toString);
    });
  });
});