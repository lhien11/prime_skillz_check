// 1 - Create an object literal
// named prime with the properties:
// - city
// - state
// - zip
// Assign the values based on Prime's
// address.
var prime = {
  city = "Bloomington";
  state = "Minnesota";
  zip = "55431";
};
//You can't use 'use' with this. What do you need ot separate keys and values?

// 2 - Using dot notation, create a
// new property for prime. This property
// will be called address and will
// take the value of Prime's street
// address.
prime.address = '9401 James Ave S #152';
// 3 - Using dot notation, create a
// new method for prime. This method
// will console log out the complete
// address of prime. Call the new
// property/method print.
function Print(address, city, state, zip) {
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;

}
    //There are a few issues with this:
    // -you are missing a curly bracket.
    // -This will log the methods and the properties.
    // -Also, the address won't have any spaces.
    //How could you change this to log the complete address?
