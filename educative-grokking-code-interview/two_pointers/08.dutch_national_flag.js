/**
 * Given an array containing 0s, 1s and 2s, sort the array in-place.
 * You should treat numbers of the array as objects, hence, we can’t
 * count 0s, 1s, and 2s to recreate the array.
 */

/**
 * ex1)
 * input: [1, 0, 2, 1, 0]
 * output: [0, 0, 1, 1, 2]
 *
 * ex2)
 * input: [2, 2, 0, 1, 2, 0]
 * output: [0, 0, 1, 2, 2, 2]
 */

function solution(arr) {
  let low = 0,
    high = arr.length - 1,
    i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i += 1;
      low += 1;
    } else if (arr[i] === 1) {
      i += 1;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high -= 1;
    }
  }

  return arr;
}

const result = solution([1, 0, 2, 1, 0]);
result; // [0, 0, 1, 1, 2]
