"use strict";

// JavaScript Recursion [9 exercises with solution]
// Use recursion to solve the following exercises.

// 1. Write a JavaScript program to calculate the factorial of a number. Go to the editor
// In mathematics, the factorial（階乗） of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
//factorial(0) and factorial(1) should be both 1

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    return "Invalid input. Enter a positive integer.";
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

//answer can be a very big number. If it is 21 digis or more, js displays in the format of scientific notation (i.e. with e+<number of digits>)

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function findGcd(num1, num2, divider = 1) {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  if (min % divider === 0 && max % (min / divider) === 0) {
    return min / divider;
  }
  divider++;
  return findGcd(max, min, divider);
}

console.log("hellohello");

function find() {
  return 3;
}

// 3. Write a JavaScript program to get the integers in range (x, y). Go to the editor
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
// Click me to see the solution.

// 4. Write a JavaScript program to compute the sum of an array of integers. Go to the editor
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
// Click me to see the solution.

// 5. Write a JavaScript program to compute the exponent of a number. Go to the editor
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
// Click me to see the solution.

// 6. Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
// Click me to see the solution.

// 7. Write a JavaScript program to check whether a number is even or not. Go to the editor
// Click me to see the solution.

// 8. Write a JavaScript program for binary search. Go to the editor
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'
// Click me to see the solution.

// 9. Write a merge sort program in JavaScript. Go to the editor
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]
// Click me to see the solution.