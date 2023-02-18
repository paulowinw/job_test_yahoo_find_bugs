var Mocha = require('mocha');
var assert = require('assert');
var mocha = new Mocha();

mocha.suite.emit('pre-require', this, 'solution', mocha);

function convertArrayToMap(stringsArray) {
  let map = new Map();
  stringsArray.forEach((value, key) => map.set(key, value));

  return map;
};

function countOccurrencesOfString(stringsArray, stringToFind) {
  let numberOfOccurrences = 0;
  for (let i = 0; i < stringsArray.length; i++) {
    if(stringsArray[i].toLowerCase() == stringToFind) {
      numberOfOccurrences++;
    };
  };

  return numberOfOccurrences;
};

function reverseArrayAndReturnOnlyEvenNumbers(numbersArray) {
  let newNumbersArray = [];
  for (let i = 0; i < numbersArray.length; i++) {
    if(numbersArray[i] % 2 === 0) {
      newNumbersArray.push(numbersArray[i]);
    };
  };
  newNumbersArray = newNumbersArray.reverse();
  
  return newNumbersArray;
};

/*

Unit tests below

*/

it('should convert the array to a map of the correct size and key value pairs', function () {
  // Given
  let stringsArray = ['Apple', 'Banana', 'Orange'];
    
  // When
  let map = convertArrayToMap(stringsArray);

  // Then
  assert.equal(3, map.size);
  assert.equal('Apple', map.get(0));
  assert.equal('Banana', map.get(1));
  assert.equal('Orange', map.get(2));
});
  
it('should return the correct number of occurences of a string within the array', function () {
  // Given
  let stringsArray = ['Hello', 'heLLo', 'World'];
    
  // When
  let numberOfOccurrences = countOccurrencesOfString(stringsArray, 'hello');
    
  // Then
  assert.equal(2, numberOfOccurrences);
});
  
it('should return a reversed array of even numbers', function () {
  // Given
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
  // When
  let reversedNumbersArray = reverseArrayAndReturnOnlyEvenNumbers(numbersArray);
    
  // Then
  assert.deepEqual([10, 8, 6, 4, 2], reversedNumbersArray);
});

mocha.run();