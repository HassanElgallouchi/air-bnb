const { request, response } = require("express")
const bcrypt =require("bcrypt")
const userModel=require("../moduls/user")
const body_parser =require("body-parser")
const jwt = require('jsonwebtoken');
const SECRET = "motSecret";
const MAXAGE = Math.floor(Date.now() / 1000) + (60 * 60);
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
exports.findUser=(request,response)=>{
   const userdata= { email,password } = request.body;
   userModel.chikingUserData(userdata,(error,result)=>{
      if(result.length===0){
         response.status(401).json({
            message:"email n'exist pas"
         })
      }
      else {
         const hash = result[0].password;
   
         bcrypt.compare(password, hash, (error, correct) => {
         
           if (!correct) {
              response.status(401).json({
                 message:"votre mot de pass n'est pas correct"
              })
           }
     
           const user = {
             id: result[0].id,
             email: result[0].email,
             password:result[0].password,
             first_name:result[0].first_name,
             last_name:result[0].last_name,
             role:result[0].role,
             exp: MAXAGE
           };
     
           jwt.sign(user, SECRET, (error, token) => {
             if (error) {
              response.status(500).json({
                 message:error
              })
             }
     
             request.user = {
               id: result[0].id,
               email: result[0].email,
               password:result[0].password,
               first_name:result[0].first_name,
               last_name:result[0].last_name,
               role:result[0].role,
             };
             
              response.cookie('authcookie', token, { maxAge: MAXAGE });
             response.status(200).json({
                token:token,
                user:{
                  role:request.user.role,
                  first_name:request.user.first_name,
                  last_name:request.user.last_name,
                  email:request.user.email
                }
             })
             console.log("new infrmation",request.user.username)
             return  request.user 
           });
         });
       }
     
        
      })
   }
