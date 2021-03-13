const todoModule = (() => {
    const todo = []
    function todo(title, description, dueDate, priority, projectId = 0) {
        const obj = Object.create(todo.proto)
        obj.title = title
        obj.description = description
        obj.dueDate = dueDate
        obj.priority = priority
        obj.projectId = projectId
        todo.push(obj)
    }
    return {
        createTodo: todo,
        getTodos: ()=> [...todo]
    }
})()

const projectModule = (() => {
    const project = ['default']
})()

export {todoModule}