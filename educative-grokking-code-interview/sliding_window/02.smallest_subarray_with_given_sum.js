/**
 * Given an array of positive numbers and a positive number ‘S,’ find the length
 * of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.
 * Return 0 if no such subarray exists.
 */

/**
 * ex1)
 * input: [2, 1, 5, 2, 3, 2], S = 7
 * output: 2
 *
 * [5, 2] gives the smallest subarray with a sum greater than or equal to 7
 *
 * ex2)
 * input: [2, 1, 5, 2, 8], S = 7
 * output: 1
 *
 * [8] gives the smallest subarray with a sum greater than or equal to 7
 */

function solution(arr, S) {
  let windowStart = 0,
    windowSum = 0,
    minLenth = Number.POSITIVE_INFINITY;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= S) {
      minLenth = Math.min(minLenth, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return minLenth === Number.POSITIVE_INFINITY ? 0 : minLenth;
}

const result = solution([2, 1, 5, 2, 3, 2], 7);
result; // 2
