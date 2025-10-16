import express from "express";
import { getTasks, createTask, removeTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);        // Afficher toutes les tâches
router.post("/", createTask);     // Ajouter une tâche
router.delete("/:id", removeTask); // Supprimer une tâche

export default router;
