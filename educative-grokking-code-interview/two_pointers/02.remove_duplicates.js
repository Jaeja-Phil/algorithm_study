/**
 * Given an array of sorted numbers, remove all duplicates from it.
 * You should not use any extra space; after removing the duplicates in-place
 * return the length of the subarray that has no duplicate in it.
 */

/**
 * ex1)
 * input: [2, 3, 3, 3, 6, 9, 9]
 * output: 4
 *
 * first four elements after removing duplicates will be [2, 3, 6, 9]
 *
 * ex2)
 * input: [2, 2, 2, 11]
 * output: 2
 *
 * first two elements after removing duplicates will be [2, 11]
 */

function solution(arr) {
  let nextNonDuplicate = 1;
  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }

  return nextNonDuplicate;
}

const result = solution([2, 3, 3, 3, 6, 9, 9]);
result; // 4
