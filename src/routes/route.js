const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")
const bookController = require("../controllers/bookController")




router.post("/register",userController.registerUser)
router.post("/books",bookController.registerBook)

router.post("/login",userController.loginUser)



module.exports = router