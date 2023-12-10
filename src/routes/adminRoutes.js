const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/adminController");

router.get("/", mainControllers.admin);
router.get("/create", mainControllers.create);
router.post("/create", mainControllers.createItem);
router.get("/edit/:id", mainControllers.edit);
router.put("/edit/:id", mainControllers.editItem);
router.delete("/delete/:id", mainControllers.deleteItem);

module.exports = router;

// - GET -> /admin
// - GET -> /admin/create
// - POST -> /admin/create
// - GET -> /admin/edit/:id
// - PUT -> /admin/edit/:id
// - DELETE -> /admin/delete/:id
