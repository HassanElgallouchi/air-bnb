const { request, response } = require("express")
const express =require ("express")
const router = express.Router()
const userController =require("../controllers/users")
router.post("/api/signup",userController.newUser)
router.post("/api/sigin",userController.findUser)
// définer la route get/api
router.get("/api",(request,response)=>{
   response.json({
       message:"hallo world"
   })
})
router.use('*',(request,response)=>{
    response.status(404).json({
        message:'this page is not found'
    })
})
module.exports= router