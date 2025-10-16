import { tasks } from "../config/db.js";
import Task from "../models/monModel.js";

let idCounter = 1;

// 🔹 Afficher toutes les tâches
export const getTasks = (req, res) => {
  res.json(tasks);
};

// 🔹 Ajouter une nouvelle tâche
export const addTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Le titre est obligatoire" });

  const newTask = new Task(idCounter++, title);
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// 🔹 Supprimer une tâche par ID
export const removeTask = (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id === parseInt(id));

  if (index === -1)
    return res.status(404).json({ message: "Tâche non trouvée" });

  tasks.splice(index, 1);
  res.json({ message: "Tâche supprimée avec succès" });
};
