// 1 - Use a built-in method of Arrays
// to add the value 32 to the end of
// the following array.

var arr = [3, 4, 6, 0];
arr.push(32);
//console.log(arr);
// 2 - Remove the values 4 & 6 from
// arr using the splice method.
arr.splice(1,2);
//console.log(arr);

// 3 - Use the sort method to order
// each array value from smallest
// to largest.
arr.sort();
//console.log(arr);

// 4 - Use the forEach method to
// halve the value of each
// number in the array.
<<<<<<< HEAD
arr.forEach(function(element, index){
  arr[index] = element / 2;
});
//You can leave out the theArray parameter here. becasue you are already calling it on arr.
console.log(arr);
=======
arr.forEach(function(element, index, theArray){
  theArray[index] = element / 2;
});

//console.log(arr);
>>>>>>> a1184376f5d10bc8291bff3467fb07ddf9a4f7ab
