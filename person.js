/*const Person={
name:"Mubashir",
Status:"ok"
}*/

class PersonInfo{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    showInfo(){
        console.log("your name="+this.name+"&&"+"your age ="+this.age);
    }
}  
  


module.exports=PersonInfo;  //we use this code into another js file
//module.exports=Person;