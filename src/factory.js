const todoModule = (() => {
    const todoList = []
    function todoFactory(title, description, dueDate, priority, projectId = 0) {
        const obj = {}
        obj.title = title
        obj.description = description
        obj.dueDate = dueDate
        obj.priority = priority
        obj.projectId = projectId
        todoList.push(obj)
    }
    return {
        createTodo: todoFactory,
        getTodos: ()=> [...todoList],
        deleteTodo: (index)=> todoList.splice(index, 1)
    }
})()

const projectModule = (() => {
    const project = ['default']
})()

export {todoModule}