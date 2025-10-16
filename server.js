import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mesRoutes from "./src/routes/mesRoutes.js"; // ✅ Ajout de l'import correct

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", mesRoutes); // ✅ maintenant mesRoutes est défini

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});
