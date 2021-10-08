class Person{
    //creating phase
    //constructor
    #salary;
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.#salary=salary;
    }
    //methods
    getName(){
        console.log(`my name is ${this.name}, ${this.#salary} and I am year ${this.age}`)
    }
}
//object
const person =new Person('pradip',21,41650);
person.getName();
//inheritance
class Coder extends Person{
    constructor(name,age,profession){
        super(name,age)
        this.profession=profession;
    }
    getName(){
        console.log(`my name is ${this.name}, I am a ${this.profession}`)
    }
}
const coder=new Coder("pradip",21,"programmer");
console.log(coder);
coder.getName()