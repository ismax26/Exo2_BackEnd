import { getAllTasks, addTask, deleteTask } from "../models/monModel.js";

export const getTasks = (req, res) => {
  res.json(getAllTasks());
};

export const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Le titre est requis" });
  }
  const newTask = addTask(title);
  res.status(201).json(newTask);
};

export const removeTask = (req, res) => {
  const id = parseInt(req.params.id);
  if (deleteTask(id)) {
    res.json({ message: "Tâche supprimée" });
  } else {
    res.status(404).json({ message: "Tâche introuvable" });
  }
};
