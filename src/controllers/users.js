const { request, response } = require("express")
const bcrypt =require("bcrypt")
const userModel=require("../moduls/user")
const body_parser =require("body-parser")

// function pour ajouter user
exports.newUser=(request,response)=>{
   const newUser={
      email:request.body.email ,
      password:request.body.password,
      first_name:request.body.first_name,
      last_name:request.body.last_name,
      role:request.body.role
   }
   console.log(newUser)
  
   
    userModel.AddUser(newUser,(error,result)=>{
   if(error){
      response.status(500).json({
         message:error
      })
   }
          response.status(201).json({
         message:"user add successfule",
         email:result.email,
         password:result.password,
         first_name:result.first_name,
         last_name:result.last_name,
         role:result.role
      })
    }
    )}

   


  
// 


// login
// exports.authenticate=(request,response)=>{
   // const userdata= { email,password } = request.body;
   // userModel.chikingUser(userdata).then(result=>{
      // response.status(201).jason({
         // message:"login successfule",
         // email:result.email,
         // password:result.password,
      // })
         // }).catch(error=>{
            // response.status(500).jason({
               // message:error
            // })
         // })
      // }



    