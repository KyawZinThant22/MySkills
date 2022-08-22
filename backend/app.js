const express = require("express");
const projectRouter = require("./routes/projectRouter");

const app = express();

//MiddleWare
app.use(express.json());

app.use("/api/v1/projects", projectRouter);

module.exports = app;
