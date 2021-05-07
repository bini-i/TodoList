export default(() => {
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
    createTodo: (title, description, priority, dueDate, projectId) => {
      const newTodo = todoFactory(title, description, priority, dueDate, projectId);
      localStorage.setItem('todoList', JSON.stringify(todoList))
      return newTodo
    },
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
      localStorage.setItem('todoList', JSON.stringify(todoList))
      return todoList[index]
    },
    deleteTodo: (index) => {
      const number = todoList.findIndex((todo) => todo.id === parseInt(index, 10));
      const toBeDeleted = todoList[number]
      todoList.splice(number, 1);
      localStorage.setItem('todoList', JSON.stringify(todoList))
      return toBeDeleted
    },
    loadTodoList: ()=> {
      const savedTodoList = JSON.parse(localStorage.getItem('todoList'))
      if (savedTodoList) {
        todoList.push(...savedTodoList)
      }
      return savedTodoList
    }
  };
})();