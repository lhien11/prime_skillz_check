// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4
function myFunct(){
  return 4;
}
//console.log(myFunct());

// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
function multiply(a, b){
  return a * b;
}
//console.log(multiply("hien", 4));

// 3 - Write a function expression
// that takes one argument and
// console logs that value.
var expression = function(a){
  console.log(a);
}
// 4 - Write a function that calls the
// function from #2 above. The first argument
// should be provided by calling the
// function from #1 and the second argument
// by passing in a number of your choice.
// This new function should console log the
// results of calling function #2.
function mainFunction(myFunct, a){
  var number = myFunct();
  console.log(multiply(number, a));
}

mainFunction(myFunct, 5);
<<<<<<< HEAD

// Can also call a function as an argument:

multiply(myFunct, 5);
=======
>>>>>>> a1184376f5d10bc8291bff3467fb07ddf9a4f7ab
