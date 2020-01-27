const http= require('http');
// create server object

http.createServer((req,res)=>{
//write respons
res.write("hello World");
res.end();
}).listen(5000,()=>console.log("server is running...."));