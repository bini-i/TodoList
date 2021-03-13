import todoModule from './factory'

export default (title, description, priority, dueDate) => {
    todoModule.createTodo(title, description, priority, dueDate)
}