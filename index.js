console.clear();
console.log("workshp node");
//core module

//fs
const fs = require ("fs");
console.log(fs);
fs.readdir("./",(error,files)=>{
    if (error) console.log("the error is" , error);
    else console.log("file is,", files);
});
//http=> creation server
const http=require("http");
// const { CLIENT_RENEG_LIMIT } = require("tls");

const server = http.createServer((req,res)=>{
    res.end("Server is connected hello you!!!!!");
});
const PORT = 8000;
server.listen(PORT, () => console.log(`server is connected on ${PORT}`));

//third party 
const express=require('express')
//custom/local modules