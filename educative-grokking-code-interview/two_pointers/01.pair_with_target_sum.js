/**
 * Given an array of sorted numbers and a target sum, find a pair
 * in the array whose sum is equal to the given target.
 */

/**
 * ex1)
 * input: arr = [1, 2, 3, 4, 6], target = 6
 * output: [1, 3]
 *
 * sum at index 1 and 3 will give target 6
 *
 * ex2)
 * input: arr = [2, 5, 9, 11], target = 11
 * output: [0, 2]
 *
 * sum at index 0 and 2 will give target 11
 */

function solution(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [left, right];
    }

    if (target > currentSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1, -1];
}

const result = solution([1, 2, 3, 4, 6], 6);

function alternativeSolution(arr, target) {
  const nums = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (target - num in nums) {
      return [nums[target - num], i];
    }
    nums[arr[i]] = i;
  }

  return [-1, -1];
}
