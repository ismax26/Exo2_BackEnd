const express = require("express");
const app = express();
const PORT = 3000;

// Middleware pour lire les JSON
app.use(express.json());

// ✅ Route de test
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API TodoList 🚀");
});

// Exemple de routes pour les tâches (si tu fais une TodoList)
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
