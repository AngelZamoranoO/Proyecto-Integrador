const express = require("express");

const router = express.Router();

router.get("/home", (req, res) => res.send("Route for Home View"));
router.get("/contact", (req, res) => res.send("Route for Contact View"));
router.get("/about", (req, res) => res.send("Route for About View"));
router.get("/faqs", (req, res) => res.send("Route for Faqs View"));

module.exports = router;






// - GET -> /home
// - GET -> /contact
// - GET -> /about
// - GET -> /faqs
