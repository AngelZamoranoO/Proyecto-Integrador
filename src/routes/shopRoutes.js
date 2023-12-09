const express = require("express");
const router = express.Router();

router.get("/shop", (req, res) => res.send("Route for Shop View"));
router.get("/shop/item/:id", (req, res) => res.send("Route for find and retrieve a product from a ID"));
router.get("/shop/cart", (req, res) => res.send("Route for  find a Cart"));

router.post("/shop/item/:id/add", (req, res) => res.send("Route for  find a Cart"));
router.post("/")

module.exports = router;




// - GET -> /shop
// - GET -> /shop/item/:id
// - POST -> /shop/item/:id/add
// - GET -> /shop/cart
// - POST -> /shop/cart