const path=require('path');  // path give us utilites for file and forlders 

// Base file name
console.log("base name="+path.basename(__filename));

// directory name
console.log("directory name= "+path.dirname(__filename));

//extention name
console.log("extention name ="+path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concatinate path
console.log("first url"+path.join(__dirname,'test','hello.html'));
console.log("2nd url"+path.join(__dirname,'test',path.basename(__filename)));

