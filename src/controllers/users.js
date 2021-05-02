const { request, response } = require("express")
const bcrypt =require("bcrypt")
const userModel=require("../moduls/user")
const body_parser =require("body-parser")

// function pour ajouter user
exports.newUser=(request,response)=>{
   const {
      email ,
      password,
      first_name,
      last_name,
      role
   }=request.body
   // error if the frist name not have value
   if(first_name.length==0){
      response.status(400).json({
         message:"le champ frist_name n'est pas rensenlgné"
      })
   }
   
   else{
// chiking if email is exist
       
   userModel.chikingUser(email,(error,result)=>{
      if(result.length !==0){
         console.log(result.length)
         response.status(409).json({
            message:"Un utilisateur utilisant cette adress email est déjà enregistré"
         })
      }
      
      else{
         // hashing the password
         const saltRounds = 10;
         bcrypt.hash(password,saltRounds,(error,hash)=>{
           if(error){
              response.status(500).json({
                 message:error
              })
            }
             const  newUser = {
                  email ,
                  password:hash,
                  first_name,
                  last_name,
                  role
             }
         //   creat new user
            userModel.AddUser(newUser,(error,result)=>{
               if(error){
                  response.status(500).json({
                     message:error
                  })
               }
                      response.status(201).json({
                     message:"user add successfule",
                     email:newUser.email,
                     password:newUser.password,
                     first_name:newUser.first_name,
                     last_name:newUser.last_name,
                     role:newUser.role
                  })
                })

         })
      }
   })
   }
  
}

// end of inscreption


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



    