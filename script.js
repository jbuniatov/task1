document.addEventListener('DOMContentLoaded', function() { 
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

  document.getElementById("button").addEventListener('click', function() { // event listener for button click
    document.getElementById("nr1").innerHTML = onceSum1(1, 3); // => 4 // calling onceSum1 with (1,3) arguments and displaying result to element with id1
    document.getElementById("nr2").innerHTML = onceSum1(5, 3); // => 4 // calling onceSum1 with (5,3) arguments and displaying result to element with id2
    document.getElementById("nr3").innerHTML = onceSum2(2, 7); // => 9 // calling onceSum2 with (2,7) arguments and displaying result to element with id3
    document.getElementById("nr4").innerHTML = onceSum2(5, 2); // => 9 // calling onceSum3 with (5,2) arguments and displaying result to element with id4
    this.style.display="none";
  });

}, false);

