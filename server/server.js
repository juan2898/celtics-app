const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express(); //
app.use(cors())
app.use(bodyParser.json()); //I want to use body parser

const data = [{
    userName: "admin",
    password: "password"
}]

app.post("/loginCheck", (request, response)=> {
    if (request.body) {
        if (request.body.userName === data[0].userName && request.body.password === data[0].password) {
            return response.status(200).send("Successful loggin")
        } else {
            return response.send("fucker") 
            
        }
    }
})


app.listen(3001, console.log("Dick head")); 