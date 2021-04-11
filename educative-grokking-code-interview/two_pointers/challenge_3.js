/**
 * Given an array, find the length of the smallest subarray in it
 * which when sorted will sort the whole array.
 */

/**
 * ex1)
 * input: arr = [1, 2, 5, 3, 7, 10, 9, 12]
 * output: 5
 *
 * we need to only sort subarray [5, 3, 7, 10, 9] to make the whole array sorted
 *
 * ex2)
 * input: arr = [1, 3, 2, 0, -1, 7, 10]
 * output: 5
 *
 * we need to only sort subarray [1, 3, 2, 0, -1] to make the whole array sorted
 */

function solution(arr) {
  let low = 0,
    high = arr.length - 1;

  // find the first number that is out of sorting order from the beginning
  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low += 1;
  }

  if (low === arr.length - 1) return 0;

  // find the first number that is out of sorting order from the end
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  // find max and min of the subarray
  let subArrayMax = -Infinity,
    subArrayMin = Infinity;
  for (k = low; k < high + 1; k++) {
    subArrayMax = Math.max(subArrayMax, arr[k]);
    subArrayMin = Math.min(subArrayMin, arr[k]);
  }

  // extend the subarray to include any number which is bigger than the min of the subarray
  while (low > 0 && arr[low - 1] > subArrayMin) {
    low -= 1;
  }

  while (high < arr.length - 1 && arr[high + 1] < subArrayMax) {
    high += 1;
  }

  return high - low + 1;
}

const result = solution([1, 2, 5, 3, 7, 10, 9, 12]);
result; // 5
