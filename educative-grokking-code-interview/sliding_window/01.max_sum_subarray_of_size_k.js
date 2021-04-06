/**
 * Given an array of positive numbers and a positive number ‘k,’
 * find the maximum sum of any contiguous subarray of size ‘k’.
 */

/**
 * ex1)
 * input: [2, 1, 5, 1, 3, 2], k: 3
 * output: 9
 *
 * [5, 1, 3] gives the maximum subarray
 *
 * ex2)
 * input: [2, 3, 4, 1, 5], k: 2
 * output: 7
 *
 * [3, 4] gives the maximum subarray
 */

function solution(arr, k) {
  let windowSum = 0,
    maxSum = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    maxSum = Math.max(maxSum, windowSum);
    if (windowEnd >= k - 1) {
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return maxSum;
}

const result = solution([2, 1, 5, 1, 3, 2], 3);
result; // 9
