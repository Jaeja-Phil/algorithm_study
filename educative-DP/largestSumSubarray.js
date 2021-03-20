/**
 * given an array, find contiguous subarray with largest sum
 */

/**
 * Using Kadane's algorithm:
 * - scan entire array
 * - at each position, find maximum sum of the subarray ending there
 *   - keep current_max and global_max
 */

/**
 * Pseudocode:
 * currentMax = arr[0];
 * globalMax = arr[0];
 * while iterating array...(i++)
 *   if current_max is less than 0
 *     set current_max to arr[i]
 *   else
 *     current_max = current_max + arr[i]
 *
 *   if global_max is less than current_max
 *     global_max = current_max
 */

const findMaxSumSubArray = arr => {
  if (arr.length < 1) {
    return 0;
  }

  let cur_max = arr[0];
  let global_max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (cur_max < 0) {
      cur_max = arr[i];
    } else {
      cur_max += arr[i];
    }

    if (global_max < cur_max) {
      global_max = cur_max;
    }
  }

  return global_max;
};

const result = findMaxSumSubArray([-4, 2, -5, 1, 2, 3, 6, -5, 1]);
result; // 12
