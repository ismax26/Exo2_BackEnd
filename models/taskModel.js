class TaskModel {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const newTask = { id: this.tasks.length, title };
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks() {
    return this.tasks;
  }

  deleteTask(id) {
    const index = this.tasks.findIndex(t => t.id === parseInt(id));
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = new TaskModel();
