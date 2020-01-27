const os=require('os');
const fs=require('fs');
const path=require('path');
//plat form
console.log("platform="+os.platform());

// cpu architecture
console.log("architecture="+os.arch());

// cpu core info
//console.log(os.cpus());

// free memory
console.log("free memory="+os.freemem());

//total memory
console.log("total memory="+os.totalmem());

//home directory
 console.log("home directory="+os.homedir());
/*
fs.writeFile(
    path.join(__dirname,'url_demo.txt'),
    '',
    (err)=>{
        if(err) throw err;
        console.log("url.js file is created");
        
    }
);
*/
fs.rename(
    path.join(__dirname,'url_demo.txt'),
    path.join(__dirname,'url_demo.js'),
    (err)=>{
        if(err) throw err;
        console.log("file is rename");
    }
);