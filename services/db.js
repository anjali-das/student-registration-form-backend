// DATABASE CONNECTION WITH NODE

// Import mongoose in db.js
const mongoose = require('mongoose')

//Using mongoose, define connection between mongodb and express     
mongoose.connect('mongodb://localhost:27017/studentRegistration')



//Create a model/scheme/collection for storing data in db       
const Student = mongoose.model('Student',{
    firstname:String,
    lastname:String,
    address:String,
    email:String,
    mobile:String,
    dob:String,
    gender:String,
    group:String

})

//export the collection
module.exports = {
    Student
}
