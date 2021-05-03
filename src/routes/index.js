
const express =require ("express")
const router = express.Router()
const userRouter=require("../routes/users")
const routerPlace = require("../routes/places")
router.use(userRouter)
router.use(routerPlace)
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
