// Write a switch statement that
// console logs witty statements for each
// day of the standard work week: Monday, Tuesday,
// Wednesday, Thursday, Friday

var day;
switch(new Date().getDay()) {
  case 1:
    day = "EWww Monday";
    break;
  case 2:
    day = "Tuesday: The flash is on...";
    break;
  case 3:
    day = "Wednesday: Hump day";
    break;
  case 4:
    day = "Thursday: almost over";
    break;
  case 5:
    day = "Friday: it is here, the weekend!";
    break;
  default:
    day = "It must be a saturday or sunday then";
}

//console.log(day);
//You could also just put console logs within each case.
