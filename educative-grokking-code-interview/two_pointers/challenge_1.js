/**
 * Given an array of unsorted numbers and a target number, find all
 * unique quadruplets in it, whose sum is equal to the target number.
 */

/**
 * ex1)
 * input: arr = [4, 1, 2, -1, 1, -3], target = 1
 * output: [-3, -1, 1, 4], [-3, 1, 1, 2]
 *
 * ex2)
 * input: arr = [2, 0, -1, 1, -2, 2], target = 2
 * output: [-2, 0, 2, 2], [-1, 0, 1, 2]
 */

function solution(arr, targetSum) {
  arr.sort((a, b) => a - b);
  const quadruplets = [];

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      // skip same number to avoid duplicates
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        // skip same number to avoid duplicates
        continue;
      }
      searchPairs(arr, targetSum, i, j, quadruplets);
    }
  }

  return quadruplets;
}

function searchPairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while (left < right) {
    let sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) {
      // found quadruplet
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1;
      }
      while (left < right && arr[right] == arr[right + 1]) {
        right -= 1;
      }
    } else if (sum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

const result = solution([4, 1, 2, -1, -1, -3], 1);
result; // [[-3, -1, 1, 4], [-1, -1, 1, 2]]
