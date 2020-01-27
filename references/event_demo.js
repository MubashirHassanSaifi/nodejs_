const eventEmitter=require('events');
const path=require('path');
const fs=require('fs');
// inherit class form event emitter 
 class MyEmitter extends eventEmitter{}
 
 // create instance of class'
 const emiterObject= new MyEmitter();
 
 //emiter listener (create event)
 emiterObject.on('eventName',()=>{
     console.log("my first event");
 });
// create another event listener function  (_register the events)
emiterObject.on('eventWithPrams',(a,b)=>{
console.log(a,b,this);

});
//asynchronous event handlig
emiterObject.on('eventWithPrams',(a,b)=>{
    setImmediate(()=>{
        console.log("asynchornous events");
    });
});
// calling the event just for one time if you want to call it again it ignored your calling
emiterObject.once('eventName',()=>{
    console.log("calling the event for one time");
});


 
 //trigger the event (cllling the event)
 emiterObject.emit('eventName');
 //passing arguments to the listner function
 emiterObject.emit('eventWithPrams',10,20);
// call event listener function asynchronous
// setImmedate() or process.nextTick() function are used

 emiterObject.emit('eventName');

/*-------------error event handling-------------------
if you emit a error event without register the error is thrown, a stack trace is printed and node js process will exit 
*/
emiterObject.on('error',(err)=>{
    console.error("!whoop  there is an error");
});
// emit the error event
emiterObject.emit('error',new Error("whoop!"));


//create a logger.js file
fs.writeFile(
    path.join(__dirname,'logger.js'),
    '',
    (err)=>{
        if(err) throw err;
        console.log("logger.js file is created");
    }
    
);