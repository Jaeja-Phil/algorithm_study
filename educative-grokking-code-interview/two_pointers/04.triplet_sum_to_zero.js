/**
 * Given an array of unsorted numbers, find all unique triplets in it
 * that add up to zero.
 */

/**
 * ex1)
 * input: [-3, 0, 1, 2, -1, 1, -2]
 * output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
 *
 * ex2)
 * input: [-5, -2, -1, -2, 3]
 * output: [[-5, 2, 3], [-2, -1, 3]]
 */

function solution(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    searchPair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}

function searchPair(arr, targetSum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1;
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1;
      }
    } else if (targetSum > currentSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

const result = solution([-3, 0, 1, 2, -1, 1, -2]);
result; // [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
