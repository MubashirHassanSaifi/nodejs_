const fs=require('fs');
const path=require('path');

//create folder
/*
fs.mkdir(path.join(__dirname,'/test'),{ },err=>{
    if(err) throw err
    console.log("Folder is successfully created");
});
*/

// create and write file
/*
fs.writeFile(
path.join(__dirname,'/test','file.txt'),
'This is my first file ',
(err)=>{
    if(err)throw err;
    console.log("file is created");
    // {append file  }
    fs.appendFile(
        path.join(__dirname,'/test','file.txt'),
        'appended data',
        (err)=>{
            if (err) throw err;
            console.log("file is appended");
        }
    );
}
);
*/

// read file
/*
fs.readFile(
path.join(__dirname,'/test','file.txt'),
'utf8',
(err,data)=>{
    if(err) throw err;
console.log( "File read data---->" +data);
}
);
*/
// renome file
/*fs.rename(
 path.join(__dirname,'/test','file.txt'),       //old file name
 path.join(__dirname,'/test','newFile.txt'),    // new file name
 (err)=>{                                      //call back function
     if(err) throw err;
     console.log("your file is rename");
 }
);
*/
// create a new file os.js
fs.writeFile(
    path.join(__dirname,'os_demo.js'),'',(err)=>{
        if(err) throw err;
    console.log("os.js file is created");
    }
    );
