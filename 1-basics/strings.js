// 1 - Create a variable named phrase and assign it the value of an empty string
var phrase = "";
// 2 - Update the phrase variable by assigning it a value of "The rain in Spain falls gently on the plain"
phrase = "The rain in Spain falls gently on the plain";
// 3 - Console log the length of phrase
//console.log(phrase);
// 4 - Console log the word Spain by using the substring method
console.log(phrase.substring(11, 17));
//THis will return the whole string. How could you just log the word "Spain"?

// 5 - Append the value ". The end." to the phrase variable.
phrase += ". The end.";
console.log(phrase);
