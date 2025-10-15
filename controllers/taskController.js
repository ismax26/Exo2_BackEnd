let tasks = [];

exports.getAllTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Titre requis" });

  const newTask = { id: Date.now(), title };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id != id);
  res.json({ message: "Tâche supprimée" });
};
