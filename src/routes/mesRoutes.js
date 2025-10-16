import express from "express";
import { getTasks, addTask, removeTask } from "../controllers/monController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", addTask);
router.delete("/:id", removeTask);

export default router;
