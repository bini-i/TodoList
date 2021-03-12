
class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }
}


let example = new Todo("job", "solve", "13-03-21", "medium")
console.log(example.title);
console.log(example);

