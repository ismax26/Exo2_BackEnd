const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json()); // pour lire le JSON
app.use('/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
