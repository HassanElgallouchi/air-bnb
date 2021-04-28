const db = require ("../config/database")
// function for select all userName that match with the userName entried in siginUp
exports.emailExiste=(email,Callback)=>{
    db.query(`SELECT email FROM user where user.email = "${email}" `,(error,result)=>{
        if(error){
            console.log("error:", error)
            Callback(error,null)
            return;
        }
        Callback(null,result)
    })
  
}
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
//   chicking if the email and password exist
//   exports.chikingUser=(userdata,Callback)=>{
    // db.query(`SELECT * FROM user where email ="${userdata.email}" and password="${userdata.password}" ;`,(error,result)=>{
        // if(error){
            // console.log("error:", error)
            // Callback(error,null)
        // }
        // console.log(result)
        // Callback(null,result)
    // })
//   
    // }