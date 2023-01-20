import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";

const app = express();

// middelware
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(PORT);

console.log(`Server on port ${PORT}`);
