/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
function numberGenerator(startingNumber, totalLength) {
  var answer = String(startingNumber);
  for (var i = answer.length; i < totalLength; i++) {
    answer += Math.floor(Math.random() * 10);
  }
  return answer;
}

function testCardValidity(startingNums, lengths, cardMatch) {
  for (let i = 0; i < startingNums.length; i++) {
    for (let x = 0; x < lengths.length; x++) {
      it ('has a prefix of ' + startingNums[i] + ' and a length of ' + lengths[x], function() {
        var generatedNumber = numberGenerator(startingNums[i], lengths[x]);
        if (detectNetwork(generatedNumber) !== cardMatch) {
          throw new Error('Test failed');
        }
      })  
    }
  }
}



var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  var startingNums = [38, 39];
  var lengths = [14];
  
  testCardValidity(startingNums, lengths, 'Diner\'s Club');
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };
  var startingNums = [34, 37];
  var lengths = [15];
  
  testCardValidity(startingNums, lengths, 'American Express'); 
})

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
  // assert(detectNetwork('4123456789012') === 'Visa');

  var startingNums = [4];
  var lengths = [13, 16, 19];
  
  testCardValidity(startingNums, lengths, 'Visa');
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  // expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  
  var startingNums = [51, 52, 53, 54, 55];
  var lengths = [16];
  
  testCardValidity(startingNums, lengths, 'MasterCard');
  
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  // detectNetwork('5412345678901234').should.equal('MasterCard');
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011234567890123').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011234567890123456').should.equal('Discover');
  });
  
  var startingNums = [65, 6011, 644, 645, 646, 647, 648, 649];
  var lengths = [16, 19];
  
  testCardValidity(startingNums, lengths, 'Discover');
});
  
describe('Maestro', function() {
  var startingNums = [5018, 5020, 5038, 6304];
  var lengths = [12, 13, 14, 15, 16, 17, 18, 19];
  
  testCardValidity(startingNums, lengths, 'Maestro');
});

describe('China UnionPay', function() {
  var startingNums = [624, 625, 626];
  var lengths = [16, 17, 18, 19];
  for (var a = 622126; a <= 622925; a++) {
    startingNums.push(a);
  }
  for (var b = 6282; b <= 6288; b++) {
    startingNums.push(b);
  }
  testCardValidity(startingNums, lengths, 'China UnionPay');
});

describe('Switch', function() {
  var startingNums = [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110];
  var lengths = [16, 18, 19];
  
  testCardValidity(startingNums, lengths, 'Switch');
});

//describe('should support China UnionPay')
//describe('should support Switch')

