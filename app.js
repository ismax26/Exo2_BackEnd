import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API ToDoList 🚀 — utilisez /tasks pour accéder aux tâches.");
});

// Routes API
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
