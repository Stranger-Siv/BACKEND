const fs = require("fs")

// fs.writeFileSync('./test.txt','Hey there')

// fs.writeFile('./test.txt',"Hey there u",(err) => {})

console.log('1');
const result = fs.readFileSync('./contact.txt','utf-8') // Sync ... Blocking
console.log(result);
console.log('2');

// In this blocking request the next procedure will not run until the last procedure is completed as the task gets blocked until it get completed


console.log("1");
fs.readFile('./contact.txt','utf-8',(err , result) => { // ASync ... Non Blocking Request
    if(err){
        console.log("Error",err);
    }else{
        console.log(result);
    }
})
console.log('2');

// In this the non blocking request allows other task to get executed until the bigger task is getting executed successfully 