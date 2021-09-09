"use strict";

// JavaScript Recursion [9 exercises with solution]
// Use recursion to solve the following exercises.

// 1. Write a JavaScript program to calculate the factorial of a number.
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

// 3. Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(x, y, result = []) {
  let min = Math.min(x, y);
  let max = Math.max(x, y);
  if (min === max) {
    result.push(min);
    return result;
  }
  result.push(min);
  min++;
  return range(min, max, result);
}

// 4. Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21

function sumArray(array, result = 0, count = 0) {
  if (count === array.length) {
    return result;
  }
  result += array[count];
  count++;
  return sumArray(array, result, count);
}

// 5. Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
function getExponent(num, base, result = 1) {
  if (num % base !== 0) {
    console.log(`Invalid input. ${base} is not a base of ${num}.`);
    return;
  }
  if (num === base) {
    return result;
  }
  num = num / base;
  result++;
  return getExponent(num, base, result);
}

// 6. Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
function getNFibonacci(n, count = 3, result = [0, 1]) {
  /**
   * カウント1回目[0]を返す
   * カウント2回目[0, 1]を返す
   * カウント3回目以降、[0, 1]にarr.[カウント回数-2]＋arr.[カウント回数-1]をpushする。
   * カウントがnに達したところでreturnする。
   */
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  if (count === n) {
    result.push(result[count - 3] + result[count - 2]);
    return result;
  }
  result.push(result[count - 3] + result[count - 2]);
  count++;
  return getNFibonacci(n, count, result);
}

// 7. Write a JavaScript program to check whether a number is even or not.
function isEven(n) {
  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false;
  }
  n = n - 2;
  return isEven(n);
}

// 8. Write a JavaScript program for binary search.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

function binarySearch(array, value) {
  //check if value is within the range (i.e. between arry[0]-array[array.length-1])
  if (array[0] > value || array[array.length - 1] < value) {
    return false;
  }
  //base case when array has only one element
  if (array.length === 1) {
    if (array[0] === value) {
      return value;
    } else {
      return false;
    }
  }
  let mid = Math.ceil(array.length / 2) - 1;
  if (array[mid] >= value) {
    return binarySearch(array.slice(0, mid + 1), value);
  }
  return binarySearch(array.slice(mid+1), value);
}

function splitNum(array, num) {
  //return Math.ceil(num/2);
  return array[Math.ceil(array.length) - 1] >= num;
}
// 9. Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

// function mergeSort (array){
//   const arr = [];
//   for (let ele of array){
//     array.push([ele])
//   }
//   console.log(arr);
// }