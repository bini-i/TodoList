import { todoModule } from './factory';

export default (title, description, priority, dueDate, projectId) => {
  todoModule.createTodo(title, description, priority, dueDate, projectId);
};