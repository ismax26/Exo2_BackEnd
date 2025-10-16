import express from "express";
import { getTasks, addTask, removeTask } from "../controllers/monController.js";

const router = express.Router();

// Routes
router.get("/", getTasks);
router.post("/", addTask);
router.delete("/:id", removeTask);

export default router; // ✅ export par défaut obligatoire
