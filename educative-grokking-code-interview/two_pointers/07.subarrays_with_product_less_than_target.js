/**
 * Given an array with positive numbers and a target number, find all of
 * its contiguous subarrays whose product is less than the target number.
 */

/**
 * ex1)
 * input: arr = [2, 5, 3, 10], target = 30
 * output: [2], [5], [2, 5], [3], [5, 3], [10]
 *
 * ex2)
 * input: arr = [8, 2, 6, 5], target = 50
 * output: [8], [2], [8, 2], [6], [2, 6], [5], [6, 5]
 */

function solution(arr, target) {
  let result = [],
    product = 1,
    left = 0;
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left < arr.length) {
      product /= arr[left];
      left += 1;
    }
    const tempList = [];
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push([...tempList]);
    }
  }

  return result;
}

const result = solution([2, 5, 3, 10], 30);
result; // [[2], [5], [2, 5], [3], [5, 3], [10]]
