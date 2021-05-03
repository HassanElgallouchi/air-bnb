const express =require ("express")
const routerPlace = require('../routes/places');
const userRouter= require("../routes/users");


const router = express.Router()
router.use(routerPlace);
router.use(userRouter);

router.get("/api",(request,response)=>{
    response.json({
        message:"hallo world this is the main route"
    })
 })


router.use('*',(request,response)=>{ // pour verifier tout les routes
    response.status(404).json({
        message:'this gestion is not found tray another route'
    })
})
module.exports= router
