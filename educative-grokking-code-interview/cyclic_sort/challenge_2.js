/**
 * Given an unsorted array containing numbers, find the smallest
 * missing positive number in it.
 */

/**
 * ex1)
 * input: arr = [-3, 1, 5, 4, 2]
 * output: 3
 *
 * ex2)
 * input: arr = [3, -2, 0, 1, 2]
 * output: 4
 */

function solution(nums) {
  let idx = 0;
  const n = nums.length;

  while (idx < n) {
    const curElementMinusOne = nums[idx] - 1;
    if (
      nums[idx] > 0 &&
      nums[idx] <= n &&
      nums[idx] !== nums[curElementMinusOne]
    ) {
      [nums[idx], nums[curElementMinusOne]] = [
        nums[curElementMinusOne],
        nums[idx]
      ];
    } else {
      idx++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  return nums.length + 1;
}

const result = solution([-3, 1, 5, 4, 2]);
result; // 3
const result2 = solution([3, -2, 0, 1, 2]);
result2; // 4
