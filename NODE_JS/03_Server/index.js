const http = require('http');
const fs = require('fs')
const url = require('url');
const exp = require('constants');
const express = require('express');

const app = express()

app.get('/',(req , res)=>{
     res.send('Hello from Homepage')
})

app.get('/about',(req,res)=>{
    res.send('Hello from About')
})

function myHandler(req,res){
    if (req.url === '/favicon.ico') return res.end()
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`
    const myUrl = url.parse(req.url,true) 
    console.log(myUrl);

    fs.appendFile('log.txt',log,(err, data)=>{
        // res.end("Hello from Server Again")
        switch(myUrl.pathname){
            case '/': res.end("HomePage")
            break;
            case '/about':
            const username = myUrl.query.myname;
            res.end(`Hi ${username}`)
            break;
           default:
            res.end("404 Not Found")
        }
    })
    // console.log(req)

    
    
}

const myServer = http.createServer(app);

myServer.listen(8001,()=> console.log("Server Started"))