const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => res.send("Login view"));
router.post("/login", (req, res) => res.send("Envio datos"));
router.get("/register", (req, res) => res.send("Register View"));
router.post("/register", (req, res) => res.send("Register"));
router.get("/logout", (req, res) => res.send("Cerrar SS"));


module.exports = router;

// - GET -> /auth/login
// - POST -> /auth/login
// - GET -> /auth/register
// - POST -> /auth/register
// - GET -> /auth/logout

