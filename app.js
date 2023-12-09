const express = require("express");
const mainRoutes = require("./src/routes/mainRoutes");
const app = express();

app.use(express.static("public_html"));

// app.get("/ping", (req, res) => res.send("pong")); EJEMPLO

app.use("/", mainRoutes);

app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000")
);
