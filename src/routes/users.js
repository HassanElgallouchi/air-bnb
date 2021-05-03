const { request, response } = require("express")
const express =require ("express")
const userRouter = express.Router()
const userController =require("../controllers/users")
const placeController = require("../controllers/places")
userRouter.post("/api/signup",userController.newUser)
userRouter.post("/api/sigin",userController.findUser)
// définer la route get/api

// route Places
// router.post("/api/places",placeController.ajouterPlace)
// ....................................................

module.exports= userRouter