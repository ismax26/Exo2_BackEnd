import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import taskRoutes from "./src/routes/mesRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", mesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
