class ParentName{
    constructor(){
        this.fatherName = "Mazibar Rahman"; 
    }
}

class ChildName extends ParentName{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}

const result = new ChildName("Firoz");
const result2 = new ChildName("Topu")
console.log(result.getFullName());
console.log(result2.getFullName());