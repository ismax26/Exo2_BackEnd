import { tasks } from "../config/db.js";
import Task from "../models/monModel.js";

let idCounter = 1;

export const getTasks = (req, res) => {
  res.json(tasks);
};

export const addTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Titre obligatoire" });

  const newTask = new Task(idCounter++, title);
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const removeTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ message: "Tâche non trouvée" });

  tasks.splice(index, 1);
  res.json({ message: "Tâche supprimée" });
};
