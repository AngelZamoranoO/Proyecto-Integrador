const express = require("express");
const mainControllers = require("../controllers/authController");
const router = express.Router();

router.get("/login", mainControllers.login);
router.post("/login", mainControllers.doLogin);
router.get("/register", mainControllers.register);
router.post("/register", mainControllers.doRegister);
router.get("/logout", mainControllers.logout);


module.exports = router;

// - GET -> /auth/login
// - POST -> /auth/login
// - GET -> /auth/register
// - POST -> /auth/register
// - GET -> /auth/logout

