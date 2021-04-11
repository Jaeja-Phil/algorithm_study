/**
 * Any number will be called a happy number if, after repeatedly replacing
 * it with a number equal to the sum of the square of all of its digits,
 * leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’.
 * Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
 */

/**
 * ex1)
 * input: 23
 * output: true
 *
 * 2^2 + 3^2 = 4 + 9 = 13
 * 1^2 + 3^2 = 1 + 9 = 10
 * 1^2 + 0^2 = 1 + 0 = 1
 *
 * ex2)
 * input: 12
 * output: false
 *
 * 1^2 + 2^2 = 1 + 4 = 5
 * 5^2 = 25
 * 2^2 + 5^2 = 4 + 25 = 29
 * 2^2 + 9^2 = 4 + 81 = 85
 * 8^2 + 5^2 = 64 + 25 = 89
 * 8^2 + 9^2 = 64 + 81 = 145
 * 1^2 + 4^2 + 5^2 = 1 + 16 + 25 = 42
 * 4^2 + 2^2 = 16 + 4 = 20
 * 2^2 + 0^2 = 4
 * 4^2 = 16
 * 1^2 + 6^2 = 1 + 36 = 37
 * 3^2 + 7^2 = 9 + 49 = 58
 * 5^2 + 8^2 = 25 + 64 = 89 --> 89 happened before, infinite loop
 */

function solution(num) {
  let slow = num,
    fast = num;
  while (true) {
    slow = findSquareSum(slow);
    fast = findSquareSum(findSquareSum(fast));
    if (slow === fast) {
      break;
    }
  }

  return slow === 1;
}

function findSquareSum(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum += digit ** 2;
    num = Math.floor(num / 10);
  }
  return sum;
}

const result1 = solution(12);
result1; // false

const result2 = solution(23);
result2; // true
