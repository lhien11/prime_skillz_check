// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for(var i = 0; i < 5; i++){
  checkz++;
}
//console.log(checkz);


// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2
<<<<<<< HEAD
i=0;
while(i < 3)
{
  checkz -= 2;
  i++;
}


//This is a for loop. How would you write it as a while loop?
=======
for(i = 0; i < 3; i++){
  checkz -= 2;
}
>>>>>>> a1184376f5d10bc8291bff3467fb07ddf9a4f7ab
//console.log(checkz);

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//
/*
* It takes an array of numbers and add each
* value in the array into a variable called total.
* Then it prints 'total' to the console.
*/
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
<<<<<<< HEAD
//console.log(total);
=======
console.log(total);
>>>>>>> a1184376f5d10bc8291bff3467fb07ddf9a4f7ab
