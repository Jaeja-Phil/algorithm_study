/**
 * We are given an unsorted array containing ‘n’ numbers taken from
 * the range 1 to ‘n’. The array originally contained all the numbers
 * from 1 to ‘n’, but due to a data error, one of the numbers got
 * duplicated which also resulted in one number going missing.
 * Find both these numbers.
 */

/**
 * ex1)
 * input: arr = [3, 1, 2, 5, 2]
 * output: [2, 4]
 *
 * 2 is duplicated, 4 is missing
 *
 * ex2)
 * input: arr = [3, 1, 2, 3, 6, 4]
 * output: [3, 5]
 *
 * 3 is duplicated, 5 is missing
 */

function solution(nums) {
  let idx = 0;

  while (idx < nums.length) {
    const curElementMinusOne = nums[idx] - 1;
    if (nums[idx] !== nums[curElementMinusOne]) {
      [nums[idx], nums[curElementMinusOne]] = [
        nums[curElementMinusOne],
        nums[idx]
      ];
    } else {
      idx++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return [nums[i], i + 1];
    }
  }

  return [-1, -1];
}

const result = solution([3, 1, 2, 5, 2]);
result; // [2, 4]
