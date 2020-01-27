//universol unique identifier used to make unique an object or entity on internet
const uuid= require('uuid');
 const eventEmitter=require('events');
/*
console.log(uuid.v4());  // create every time a uniqye id
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());
*/
 class Logger extends eventEmitter{
     log(msg){
    this.emit('message',{id:uuid.v4(),msg})
     }
 }
 //module.exports=Logger;

 //const Logger=require('./references/logger');
const path=require('path');
const fs=require('fs');
// create instance of logger
const logger= new Logger();
// called listener function
logger.on('message',(data)=>{
    console.log("logger function",data);
});
logger.log("hello world");
// creating file in reference folder
fs.writeFile(
    path.join(__dirname,'/references','http_demo.js'),
    '',
    (err)=>{
        if(err) throw err;
        console.log("http demo file is created");
    }
);