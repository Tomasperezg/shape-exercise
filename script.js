class Shape{
  constructor(length, width){
    this.length = length;
    this.width = width;
  }
  GetArea(){
    let area = this.length*this.width;
    return area;
  }
  GetPerimeter(){
    let p = this.length * 2 + this.width*2;
    return p;
  }

}
class Square extends Shape{//even thoug this function is empty it can run because of the "extends" grab all the info from Shape function
  constructor(length){
    super();
    this.length = length;
  }
  GetArea(){
    let area = this.length*this.length;
    return area;
  }

  GetPerimeter(){
    let p = this.length * 2 + this.width*2;
    return p;
  }
}
let s = new Shape(10,20);
let a = s.GetArea();
let p = s.GetPerimeter();
console.log(a + " this is the area");
console.log(p + " this is the perimeter");

let sq = new Square(10,10);
let area = sq.GetArea();
let perimeter = sq.GetPerimeter();
console.log(area + " square area");
console.log(perimeter);
