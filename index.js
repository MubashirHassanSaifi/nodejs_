const http=require('http');
const path=require('path');
const fs=require('fs');
// create server object
 const server=http.createServer((req,res)=>{
    /* 
    if(req.url==='/'){
         fs.readFile(
             path.join(__dirname,'public','index.html'),
             (err,content)=>{
                 if(err) throw err;
                 res.writeHead(200,{"Content-Type":"text/html"});
                 res.end(content);             
                }
         );
     }
     if(req.url==='/api/user'){
         const user=[
             {name:"mubashir hassan Saifi",status:"active"},
             {name:'Farya hassan',status:'active'}
         ]
         res.writeHead(200,{"Content-Type":"application/JSON"});  //content-type application/JSON is used if the content is json
        res.end(JSON.stringify(user));
        }
        */
        //build file path
        console.log(path.filePath);
        
        
    let filePath=path.join(
        __dirname,
        'public',
        req.url==='/' ? 'about.html':req.url+'.html'
        ) ;
        console.log(filePath);
        let extName=path.extname(filePath);
       // console.log(extName);
        //initial content-type
        let contentType="text/html";
        //check extention and set content type
        switch(extName){
            case '.js':
                contentType='text/javascript';
                break;
                case '.json':
                    contentType='application/json';
                    break;
                    case '.css':
                        contentType='text/css';
                        break;
                    case '.png':
                        contentType='img/png';
                        break;
                        case '.jpg':
                            contentType='img/jpg';
                            break;
        }
   //read file
   fs.readFile(filePath,(err,content)=>{
       if(err){
           if(err.code=='ENOENT'){
               //page not found
               fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                   res.writeHead(200,{"content-type":"text/html"});
                   res.end(content,'utf8');
               })
               
           }
           else{
               res.writeHead(500);
               res.end("server Error",err.code);
           }
       }
       else{
           //success
           res.writeHead(200,{"Content-Type":contentType});
           res.end(content,'utf8');
       }
   });     
});

const Port= process.env.Port|| 5000;  // if any available port otherthan port:5000
server.listen(Port,()=>console.log("server is running on port:",Port));

// create public  folder
/* fs.mkdir(
     path.join(__dirname,'/public'),
     {},
     (err)=>{
         if(err) throw err;
         console.log("folder is created");
     }
 );
*/
 // create file 
/*fs.writeFile(
    path.join(__dirname,'/public','about.html'),
    '',
    (err)=>{
        if(err) throw err;
        console.log("file is created");
    }
);
*/
//create css forlder
/*
fs.writeFile(path.join(__dirname,'/Css','style.css'),
'',
(err)=>{
    if(err) throw err;
    console.log("file is created");
});
*/