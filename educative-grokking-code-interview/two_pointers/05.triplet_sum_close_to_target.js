/**
 * Given an array of unsorted numbers and a target number, find a triplet
 * in the array whose sum is as close to the target number as possible,
 * return the sum of the triplet.
 * If there are more than one such triplet, return the sum of the triplet
 * with the smallest sum.
 */

/**
 * ex1)
 * input: arr = [-2, 0, 1, 2], target = 2
 * output: 1
 *
 * [-2, 1, 2] has the closest sum to the target
 */

function solution(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallestDifference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const targetDiff = targetSum - arr[i] - arr[left] - arr[right];
      if (targetDiff === 0) {
        return targetSum;
      }
      if (Math.abs(targetDiff) < Math.abs(smallestDifference)) {
        smallestDifference = targetDiff;
      }
      if (targetDiff > 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  return targetSum - smallestDifference;
}

const result = solution([-2, 0, 1, 2], 2);
result; // 1
const result2 = solution([-3, -1, 1, 2], 1);
result2; // 0
const result3 = solution([1, 0, 1, 1], 100);
result3; //
