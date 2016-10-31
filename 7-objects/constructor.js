// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle
function RightTriangle(side1, side2, base){
  this._side1 = side1;
  this._side2 = side2;
  this._base = base;
  this.area = function(){
    return (side1 * side2) / 2;
  }
  this.perimeter = function(){
    return side1 + side2 + base;
  }

}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.

var triangle1 = new RightTriangle(3, 4, 5);
var triangle2 = new RightTriangle(6, 8, 10);

console.log("triangle1 area = " + triangle1.area());
console.log("triangle1 perimeter = " + triangle1.perimeter());

console.log("triangle2 area = " + triangle2.area());
console.log("triangle2 perimeter = " + triangle2.perimeter());
