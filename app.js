const express = require("express");

const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");


// const mainControllers = require("./controllers/mainController");

const app = express();

app.use(express.static("public_html"));

// app.get("/ping", (req, res) => res.send("pong")); EJEMPLO

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);


// app.use(mainControllers);

app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000")
);
