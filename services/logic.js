// import db.js
const db = require('./db')



// register

const register = (firstname,lastname,address,email,mobile,dob,gender,group)=>{
// logic to resolve register(firstname,lastname,email,address,mobile,dob,gender,group)
console.log('inside register logic');

// check firstname,lastname,mobile in db

return db.Student.findOne({
    email
}).then((response) => {
    console.log(response);
    if (response) {
        // firstname,lastname,mobile already exist
        return {
            statuscode: 401,
            message: "Account already exist...."
        }
    }
    else {
        // firstname,lastname,mobile are not present in db,so register it
        const newStudent = new db.Student({
           firstname,
           lastname,
           address,
           email,
           mobile,
           dob,
           gender,
           group
        })
        // to store newUser in mongodb
        newStudent.save()
        // send response as register success
        return {
            statuscode: 200,
            message: "Register successfully...."
        }
    }
})



}
// get student details history
const getDetails = ()=>{
   return db.Student.find()
    .then((result)=>{
   if(result){
    return{
        statuscode:200,
        result:result
    }
   }
  
   })
}

// export
module.exports = {
    register,
    getDetails
}