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
        getProjectTodos: (projectId) => {return todoList.filter((ele)=> ele.projectId = projectId)},
        getAllTodos: ()=> [...todoList],
        deleteTodo: (index)=> todoList.splice(index, 1)
    }
})()

const projectModule = (() => {
    const project = {0: 'default', 1: 'first', 2: 'second'}
    function projectFactory(name){
        const obj = {}
        obj.name = name
        project.push(obj)
    }
    return {
        createProject: projectFactory,
        getProject: (projectId) => project[projectId],
        getAllProject: () => Object.assign(project)
    }
})()

export {todoModule, projectModule}