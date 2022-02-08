class ParentName{
    constructor(){
        this.fatherName = "Mazibar Rahman"; 
    }
}

class ChildName extends ParentName{
    constructor(name){
        this.name = name;
    }
}

const result = new ChildName("Firoz");
console.log(result);