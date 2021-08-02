const once = (fn) => { // calling out function once
  let first = true; // variable will check if the function was already executed
  let result; // variable for the result
  return function() { // function for returning result
    if (first) { // checking if already executed (for the first time)
      result = fn.apply(this, arguments); // assigning result of the called function fn from function arguments
      first = false; // changing variable to false to avoid function implementation for the next time
    } 
    return result; // return result of fn function
  };
};

const sum = (a, b) => { 
  return a + b; // sum function
};

const onceSum1 = once(sum); // calling function once
const onceSum2 = once(sum); // calling function once

console.log(onceSum1(1, 3)); // => 4
console.log(onceSum1(5, 3)); // => 4
console.log(onceSum2(2, 7)); // => 9
console.log(onceSum2(5, 2)); // => 9
