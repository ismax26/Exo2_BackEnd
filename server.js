import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./src/routes/mesRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Page d’accueil simple
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API ToDoList 🚀 — utilisez /tasks pour gérer les tâches !");
});

// Routes de l'API
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
