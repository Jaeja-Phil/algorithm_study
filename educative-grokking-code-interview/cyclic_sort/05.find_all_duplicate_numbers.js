/**
 * We are given an unsorted array containing ‘n’ numbers taken from the
 * range 1 to ‘n’. The array has some numbers appearing twice, find all
 * these duplicate numbers without using any extra space.
 */

/**
 * ex1)
 * input: [3, 4, 4, 5, 5]
 * output: [4, 5]
 *
 * ex2)
 * input: [5, 4, 7, 2, 3, 5, 3]
 * output: [3, 5]
 */

function solution(nums) {
  const duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    const position = Math.abs(nums[i]) - 1;
    if (nums[position] < 0) duplicates.push(position + 1);
    else nums[position] = -nums[position];
  }

  return duplicates;
}

const result1 = solution([3, 4, 4, 5, 5]);
result1; // [4, 5]
const result2 = solution([5, 4, 7, 2, 3, 5, 3]);
result2; // [3, 5]
