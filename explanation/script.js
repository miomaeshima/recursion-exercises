"use strict"

function doIt(num) {
  //Base case (determines when the recursion ends)
    if (num === 0) {
      return "launch!";
    }

    console.log(num);
    num--;
    return doIt(num);
  }
  
  // Let's say we call doIt(3), 
  //    Line 11 means doIt(3) returns doIt(2), which returns doIt(1), which returns doIt(0)
  //    As doIt(0) returns "launch!", 
  //    doIt(1) returns "launch!",
  //    and that means doIt(2) returns "launch!",
  //    and that means doIt(3) returns "launch!"

  //If there is no "return" keyword in Line 11,
  // doIt(3) does not return anything.
  // doIt(2) does not return anything.
  // doIt(1) does not return anything.
  // doIt(0) returns "launch!", but that is not used anyware.

  //The fact that console.log shows "lauch!" means doIt(0) (i.e. Base case) is actually executed. 
  function doIt(num) {
    //Base case (determines when the recursion ends)
      if (num === 0) {
        return "launch!";
      }
  
      console.log(num);
      num--;
      return doIt(num);
    }
    

  