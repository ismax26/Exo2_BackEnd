let tasks = [];

// Afficher toutes les tâches
export const getAllTasks = () => tasks;

// Ajouter une tâche
export const addTask = (title) => {
  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  return newTask;
};

// Supprimer une tâche
export const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
};
