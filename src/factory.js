const todoModule = (() => {
  const todoList = [];

  function todoFactory(title, description, dueDate, priority, projectId = 0) {
    const obj = {};
    obj.id = todoList.length;
    obj.title = title;
    obj.description = description;
    obj.dueDate = dueDate;
    obj.priority = priority;
    obj.projectId = projectId;
    todoList.push(obj);
  }

  return {
    createTodo: todoFactory,
    getProjectTodos: (pId) => todoList.filter((todo) => todo.projectId === parseInt(pId, 10)),
    getAllTodos: () => [...todoList],
    getTodo: (id) => todoList.filter(todo => todo.id === parseInt(id, 10))[0],
    updateTodo: (id, title, description, dueDate, priority, projectId = 0) => {
      const index = todoList.findIndex((todo) => todo.id === parseInt(id, 10));
      todoList[index].title = title;
      todoList[index].description = description;
      todoList[index].dueDate = dueDate;
      todoList[index].priority = priority;
      todoList[index].projectId = projectId;
    },
    deleteTodo: (index) => {
      const indx = todoList.findIndex((todo) => todo.id === parseInt(index, 10));
      todoList.splice(indx, 1);
    },
  };
})();

const projectModule = (() => {
  const project = { 0: 'default' };
  function projectFactory(name) {
    const lastKey = Object.keys(project)[Object.keys(project).length - 1];
    project[parseInt(lastKey, 10) + 1] = name;
  }
  return {
    createProject: projectFactory,
    getProject: (projectId) => project[projectId],
    getAllProject: () => Object.assign(project),
  };
})();

export { todoModule, projectModule };