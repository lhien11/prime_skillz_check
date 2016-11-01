// 1 - Write a statement that
// console logs "Hello" if
// the two variables are equal
var first = 3;
var second = 5;
<<<<<<< HEAD
if(first === second){
  console.log("Hello");
}
//Best practice is to use ===, unless there is a
// specific reason not to. That way you will
// know if one of the values is a string.
=======
if(first == second){
  console.log("Hello");
}
>>>>>>> a1184376f5d10bc8291bff3467fb07ddf9a4f7ab

// 2 - Expand your answer above to
// console log "Goodbye" if
// the variables are not equal
else {
  console.log("Goodbye");
}
// 3 - Write a statement that
// assigns the value of the addition
// of the first & second variables to a new
// variable called third IF first is greater
// than second. If second is greater than first
// assign the difference of the first & second
// variables to third.
var third;
if( first > second){
  third = first + second;
} else if( second > first){
  third = first - second;
}

//console.log("third = " + third);
