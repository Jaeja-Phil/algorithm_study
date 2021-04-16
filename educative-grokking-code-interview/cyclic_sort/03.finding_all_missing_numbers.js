/**
 * We are given an unsorted array containing numbers taken from the
 * range 1 to ‘n’. The array can have duplicates, which means some
 * numbers will be missing. Find all those missing numbers.
 */

/**
 * ex1)
 * input: arr = [2, 3, 1, 8, 2, 3, 5, 1]
 * output: [4, 6, 7]
 *
 * arr should have all numbers from 1 to 8 due to duplicates [4, 6, 7] are missing
 */

function solution(arr) {
  let currentIdx = 0;
  const n = arr.length;

  while (currentIdx < n) {
    const currentNum = arr[currentIdx] - 1;
    // if element at currentIdx does not match
    // to its (value - 1)'s index
    if (arr[currentIdx] !== arr[currentNum]) {
      // swap
      [arr[currentNum], arr[currentIdx]] = [arr[currentIdx], arr[currentNum]];
    } else {
      currentIdx += 1;
    }
  }

  const missingNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      missingNumbers.push(i + 1);
    }
  }

  return missingNumbers;
}

const result = solution([2, 3, 1, 8, 2, 3, 5, 1]);
result; // [4, 6, 7]
