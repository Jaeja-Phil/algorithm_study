/**
 * Given an array containing 0s and 1s,
 * if you are allowed to replace no more than ‘k’ 0s with 1s,
 * find the length of the longest contiguous subarray having all 1s.
 */

/**
 * ex)
 * arr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1]
 * k = 2
 * output = 6
 *
 * --> replace 5th and 8th index with 1
 */

function solution(arr, k) {
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }

    // current window size is [windowStart ... windowEnd]
    // we have a maximum of 1s repeating 'maxOnesCount' times
    // --> we can have a window with maxOnesCount 1s and the
    //     remaining are 0s which should replace with 1s
    // if remaining 0s are more than 'k', shrink the window b.c
    // we are not allowed to replace more than 'k' 0s
    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

const result = solution([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2);
result; // 6
