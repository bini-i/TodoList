const todoModule = (() => {
    const todoList = []
    function todoFactory(title, description, dueDate, priority, projectId = 0) {
        const obj = {}
        obj.id = todoList.length
        obj.title = title
        obj.description = description
        obj.dueDate = dueDate
        obj.priority = priority
        obj.projectId = projectId
        todoList.push(obj)
    }
    return {
        createTodo: todoFactory,
        getProjectTodos: (projectId) => {return todoList.filter((ele)=> ele.projectId == projectId)},
        getAllTodos: ()=> [...todoList],
        getTodo: (index) => todoList[index],
        updateTodo: (index, title, description, dueDate, priority, projectId = 0) => {
            todoList[index].title = title
            todoList[index].description = description
            todoList[index].dueDate = dueDate
            todoList[index].priority = priority
            todoList[index].projectId = projectId
        },
        deleteTodo: (index)=> todoList.splice(index, 1)
    }
    
})()

const projectModule = (() => {
    const project = {0: 'default'}
    function projectFactory(name){
        const lastKey = Object.keys(project)[Object.keys(project).length - 1]
        project[parseInt(lastKey)+1] = name
    }
    return {
        createProject: projectFactory,
        getProject: (projectId) => project[projectId],
        getAllProject: () => Object.assign(project)
    }
})()

export {todoModule, projectModule}