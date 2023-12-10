const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Route for Shop View"));
router.get("/item/:id", (req, res) =>
  res.send(
    `Route for find and retrieve a product from the ID:  ${req.params.id}`
  )
);
router.post("/item/:id/add", (req, res) =>
  res.send("Route for add current item to the shop Cart")
);

router.get("/cart", (req, res) => res.send("Route for  find a Cart"));
router.post("/cart", (req, res) => res.send("Route for got to checkout page"));

module.exports = router;

// - GET -> /shop
// - GET -> /shop/item/:id
// - POST -> /shop/item/:id/add
// - GET -> /shop/cart
// - POST -> /shop/cart
