const url=require('url');
const path=require('path');
const fs=require("fs");
const myUrl=new URL('http://myWebsite.com/test.html?id=100&&status=active');

//Serialized url  (check your url)
console.log("my url="+myUrl.href+typeof(myUrl));
console.log(myUrl.toString());
 
// url domain
console.log(myUrl.host);
// url path
console.log(myUrl.pathname);
 //url query serialized 
console.log("query"+myUrl.search);
// url  query parameters
console.log(myUrl.searchParams);
 //url append parameter
 console.log(myUrl.searchParams.append('userName','bond007'));
  console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value,name)=>console.log(name));
let a=[];
let i=0;
myUrl.searchParams.forEach((value,name)=>
a[i]=name,
i++
);
console.log(a.length);
console.log(a);
// create event_demo.js file
fs.writeFile(
    path.join(__dirname,'event_demo.js'),
    '',
    (err)=>{
        if(err) throw err;
        console.log("file is created");
    }
);

