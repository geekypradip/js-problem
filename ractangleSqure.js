// Problem
// Create a class Rectangle which accepts the edges as arguments when creating the class

// it should have a method for calculating area
// create a Square class which extends from Rectangle
// do not create any new methods in Square. User should be able to invoke the getArea method from a Square instance
class Rectangle{
    constructor(length,width){
        this.length=length;
        this.width=width;
    }
     getArea(){
     console.log(2*(this.length+this.width))
    }
}
class Square extends Rectangle{
    // constructor(length,width){
    //     //super(length,width)

    // }
   
}
const square=new Square(14,12);
square.getArea()