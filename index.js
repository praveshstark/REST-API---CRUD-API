import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./route/users.js";

const app = express();
const PORT = 7000;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send(" Users API!"));
app.all("*", (req, res) =>res.send(" route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));