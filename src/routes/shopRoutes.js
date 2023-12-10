const express = require("express");
const router = express.Router();

const mainControllers = require("../controllers/shopController");

router.get("/", mainControllers.shop);
router.get("/item/:id", mainControllers.item);
router.post("/item/:id/add", mainControllers.addItem);
router.get("/cart", mainControllers.cart);
router.post("/cart", mainControllers.addToCart);

module.exports = router;

// - GET -> /shop
// - GET -> /shop/item/:id
// - POST -> /shop/item/:id/add
// - GET -> /shop/cart
// - POST -> /shop/cart
