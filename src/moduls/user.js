const db = require ("../config/database")

exports.AddUser = (newUser, Callback) => {
    db.query(`INSERT INTO user (email,password,first_name,last_name,role) VALUES
     ("${newUser.email}","${newUser.password}","${newUser.first_name}","${newUser.last_name}","${newUser.role}");`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        Callback(error, null);
        return;
      }
      
      Callback(null, result);
    })
  }
// chicking if the email and password exist
exports.chikingUser=(userdata,Callback)=>{
    db.query(`SELECT * FROM user where email ="${userdata}"  ;`,(error,result)=>{
        if(error){
            console.log("error:", error)
            Callback(error,null)
        }
        console.log(result)
        Callback(null,result)
    })
  
 }
//  chicking email and password
exports.chikingUserData=(userdata,Callback)=>{
    db.query(`SELECT * FROM user where email ="${userdata.email}"  ;`,(error,result)=>{
        if(error){
            console.log("error:", error)
            Callback(error,null)
        }
        console.log(result)
        Callback(null,result)
    })
}