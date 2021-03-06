//Need this on the top of index.js
//dotenv is NOT a dev dependancy 
const dotenv = require('dotenv')
dotenv.config();

const express = require('express'); 
const cors = require('cors'); 
const port = process.env.PORT || 4000; //add fallback to 4000 - help if this is cloned and someone doesnt have the env varible port defined 
//Path is a module that ships with node that allows us to do things with URLs - utilities library concerend with file system paths
const path = require('path'); 

console.log("web 36 rocks"); 
console.log(__dirname); 
//Environmental variable - variables that are local to the environment we are looking in 
console.log(process.env.LADY);
console.log(process.env.FOO);
console.log(process.env.ALLWAYS);
console.log(process.env.NOMBRE);
console.log(process.env.PORT);
//Our code is going to pull the port number Heroku is using with the process.env.PORT
const app = express();
//Cors teaches the responce to include a special header or set of headers which will allow the data to be
//displayed on the client - work around for single origin policy 
app.use(cors()); 
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'client/build')));

//API
app.use('/api/*', (_, res) => {
    res.json({ data: "WEB 36 WORKS"}); 
})

app.use('*', (_, res) => {
    //send back index.html
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
}); 