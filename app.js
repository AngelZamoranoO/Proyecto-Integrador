const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

// ROUTES IMPORTS

const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"))

app.use(express.urlencoded()); //POST transforme el body en un JS que el prog pueda entender
app.use(express.json()); //que los formularios entren por PUT
app.use(methodOverride("_method")); //config luego

app.use(express.static("public_html"));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000")
);
