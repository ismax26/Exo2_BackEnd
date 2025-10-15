let tasks = [];

export const getAllTasks = () => tasks;

export const addTask = (title) => {
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  return newTask;
};

export const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};
