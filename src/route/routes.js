const express = require("express")
const router = express.Router();
const {signUp ,login} = require("../controller/userController")
//const  {Authenticate } = require("../middleware/auth")

router.post("/api/signup",signUp)
router.post("/api/login",login)

//router.get("/api/profile", Authenticate,profile)

module.exports=router;