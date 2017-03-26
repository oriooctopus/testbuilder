// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var startingNum = cardNumber.substring(0, 2);
  var startingNum4 = cardNumber.substring(0, 4);
  
  if ( (startingNum4 == 4903 || startingNum4 == 4905 || startingNum4 == 4911 || startingNum4 == 4936 || startingNum4 == 6333 || startingNum4 == 6759 || cardNumber.substring(0, 6) == 564182 || cardNumber.substring(0, 6) == 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) ) {
    return 'Switch';
  } 
    
  if ( (startingNum == 38 || startingNum == 39) && cardNumber.length === 14) {
    return "Diner's Club";
  }
  if ( (startingNum == 34 || startingNum == 37) && cardNumber.length === 15 ) {
    return 'American Express';
  }
  if ( (startingNum == 51 || startingNum == 52 || startingNum == 53 || startingNum == 54 || startingNum == 55) && cardNumber.length === 16) {
    return 'MasterCard';
  }
  if ( (startingNum == 65 || startingNum4 === '6011' || (cardNumber.substring(0, 3) >= 644 && cardNumber.substring(0, 3) <= 649) ) && (cardNumber.length === 16 || cardNumber.length === 19) ) {
      return 'Discover'
  }
  if ( (startingNum4 == 5018 || startingNum4 == 5020 || startingNum4 == 5038 || startingNum4 == 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19) ) {
    return 'Maestro'
  }
  
  if ( (cardNumber[0] == 4) && ( cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19 ) ) {
    return 'Visa';
  }
  
  if ( ( (cardNumber.substring(0, 6) >= 622126 && cardNumber.substring(0, 6) <= 622925) || (cardNumber.substring(0, 3) >= 624 && cardNumber.substring(0, 3) <= 626) || (startingNum4 >= 6282 && startingNum4 <= 6288)  ) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay';
  }
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



