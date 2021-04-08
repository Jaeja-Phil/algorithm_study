/**
 * Given an array containing 0s and 1s, if you are allowed to replace no more than
 * ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.
 */

/**
 * ex1)
 * input: arr: [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k: 2
 * output: 6
 *
 * replace 0 at index 5 & 8 to have the longest contiguous subarray of 1s [5-10]
 *
 * ex2)
 * input: arr: [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k: 3
 * output: 9
 *
 * replace 0 at index 6 & 9 & 10 to have the longest contiguous subarray of 1s [4-12]
 */

function solution(arr, k) {
  let windowStart = 0,
    maxLen = 0,
    zeroOneMap = { 0: 0, 1: 0 };

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const rightNum = arr[windowEnd];
    zeroOneMap[rightNum] += 1;

    if (zeroOneMap["0"] > k) {
      const leftNum = arr[windowStart];
      zeroOneMap[leftNum] -= 1;
      windowStart++;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

const result = solution([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2);
result; // 6

function solution2(arr, k) {
  let windowStart = 0,
    maxLen = 0,
    maxZerosCount = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 0) {
      maxZerosCount += 1;
    }

    if (maxZerosCount > k) {
      if (arr[windowStart] === 0) {
        maxZerosCount -= 1;
      }
      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

const result2 = solution2([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3);
result2; // 9
