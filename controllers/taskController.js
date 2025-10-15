const TaskModel = require('../models/taskModel');

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Titre requis" });

  const task = TaskModel.addTask(title);
  res.status(201).json(task);
};

exports.getTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks();
  res.json(tasks);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const success = TaskModel.deleteTask(id);

  if (success) res.json({ message: "Tâche supprimée" });
  else res.status(404).json({ message: "Tâche introuvable" });
};
