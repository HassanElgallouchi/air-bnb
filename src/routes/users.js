const { request, response } = require("express");
const express =require ("express");
const userRouter = express.Router();

const userController =require("../controllers/users");

userRouter.post("/api/signup",userController.newUser);
userRouter.post("/api/sigin",userController.findUser);
// définer la route get/api


module.exports = userRouter