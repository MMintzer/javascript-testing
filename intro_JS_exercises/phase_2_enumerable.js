
// Overview
// JavaScript enumerates over arrays differently than Ruby; rather than taking a block, they take a callback function, which is invoked for each element of the array. Take a look at the MDN Array Documentation if it is unclear how these methods are supposed to work.
//
// Instructions
// Again, monkey-patch the following methods to the Array class using swell new language we've been learning.
//
// Array#myEach(callback) - receives a callback function and executes the callback for each element in the array
// Note that JavaScript's forEach function has no return value (returns undefined)
// Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
// should use myEach and a closure
// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)
// initialValue is optional and should default to the first element of the array if not provided
// examples:
// // without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6
//
// // with initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25); // => 31
// should also use myEach
// NB [initialValue] is the conventional way for documentation to express that the args between [ and ] are optional inputs. Your function definition will not include these square brackets.

Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
}


Array.prototype.myMap = function (callback) {
  let result = [];
  this.myEach(el => result.push(callback(el)));

  return result;
}


// Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)
// initialValue is optional and should default to the first element of the array if not provided
// examples:
// // without initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }); // => 6
//
// // with initialValue
// [1, 2, 3].myReduce(function(acc, el) {
//   return acc + el;
// }, 25); // => 31
// should also use myEach
// NB [initialValue] is the conventional way for documentation to express that the args between [ and ] are optional inputs. Your function definition will not include these square brackets.

Array.prototype.myReduce = function (callback, initialValue) {
  let arr = this;

  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  arr.myEach(el => initialValue = callback(initialValue, el));
  return initialValue;
}


console.log([1,2,3].myReduce( (total, item) => total + item ));