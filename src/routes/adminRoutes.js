const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Route for Shop View"));
router.get("/create", (req, res) => res.send("Route for Shop View"));
router.post("/create", (req, res) => res.send("Create post"));

router.get("/edit/:id", (req, res) => res.send("Route for Shop View"));
router.put("/edit/:id", (req, res) =>
  res.send(`editar un Item especifico ${req.params.id}`)
);

router.delete("/delete/:id", (req, res) => res.send("Delete"));

module.exports = router;

// - GET -> /admin
// - GET -> /admin/create
// - POST -> /admin/create
// - GET -> /admin/edit/:id
// - PUT -> /admin/edit/:id
// - DELETE -> /admin/delete/:id
