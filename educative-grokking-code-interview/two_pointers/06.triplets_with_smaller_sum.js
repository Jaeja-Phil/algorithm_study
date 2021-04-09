/**
 * Given an array arr of unsorted numbers and a target sum, count all
 * triplets in it such that arr[i] + arr[j] + arr[k] < target
 * where i, j, and k are three different indices.
 * Write a function to return the count of such triplets.
 */

/**
 * ex1)
 * input: arr = [-1, 0, 2, 3], target = 3
 * output: 2
 *
 * [-1, 0, 3] and [-1, 0, 2] gives sum less than the target
 *
 * ex2)
 * input: arr = [-1, 4, 2, 1, 3], target = 5
 * output: 4
 *
 * [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3] gives sum less than the target
 */

function solution(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    count += searchPair(arr, targetSum - arr[i], i);
  }
  return count;
}

function searchPair(arr, targetSum, first) {
  let count = 0,
    left = first + 1,
    right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] < targetSum) {
      count += right - left;
      left += 1;
    } else {
      right -= 1;
    }
  }

  return count;
}
