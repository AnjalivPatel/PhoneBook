const express = require("express");
const Router = express.Router();


Router.get('/', (req, res) => {
     res.render("signup",{title: 'fill form', password: '', email:'' });
    });

Router.post('/signup', async (req, res)=>{
  try{
    const{
      fName,
      lName,
      email,
      password,
      cpassword
    } = req.body;
console.log(fName);
    if(password === cpassword){
      
         const userData = new homeSchema({
          fName,
          lName,
          email,
          password,
         })
         userData.save(err=>{
          if(err){
            console.log("error");
          }else{
            res.render("signup",{title: 'Done', password: '', email:'' });
          }
         })

    }else{
      res.render("signup",{title: 'fill form', password: 'Password Not Matching', email:'' });
    }

  }catch(error){
    res.render("signup",{title: 'Error in code', password: '', email:'' });
  }
})




      
module.exports = Router;