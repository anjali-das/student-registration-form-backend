// code to create server using express

// import express
const express = require('express')

// import cors
const cors = require('cors')

// import logic file
const logic = require('./services/logic')

// create server using express
const server = express()

// use cors in server app
server.use(cors({
    origin:'http://localhost:4200'
}))

// Use express.json() - to parse json content
server.use(express.json())



   
// setup  port for server app
server.listen(3000,()=>{
    console.log('Student Register Form app started at port number 3000');
})



// TEST SERVER SIDE - requst resolving

// register from client- post

server.post('/register',(req,res)=>{
console.log('Inside register api');
console.log(req.body);

// call register function of logic
logic.register(req.body.firstname,req.body.lastname,req.body.address,req.body.email,req.body.mobile,req.body.dob,req.body.gender,req.body.group)
.then((result)=>{
// response send to client
res.status(result.statuscode).json(result)
})

})

server.get('/dashboard',(req,res)=>{
    console.log('Inside dashboard');
    console.log(req.body);
    logic.getDetails().then((result)=>{
        res.status(result.statuscode).json(result.result)
        console.log(result);
    })
})




