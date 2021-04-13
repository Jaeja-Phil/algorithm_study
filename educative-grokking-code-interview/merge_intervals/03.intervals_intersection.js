/**
 * Given two lists of intervals, find the intersection of these two lists.
 * Each list consists of disjoint intervals sorted on their start time.
 */

/**
 * ex1)
 * input: arr1 = [[1, 3], [5, 6], [7, 9]], arr2 = [[2, 3], [5, 7]]
 * output: [[2, 3], [5, 6], [7, 7]]
 */

function solution(arr1, arr2) {
  let result = [],
    i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    const oneOverlapTwo = arr1[i][0] >= arr2[j][0] && arr1[i][0] <= arr2[j][1];
    const twoOverlapOne = arr2[j][0] >= arr1[i][0] && arr2[j][0] <= arr1[i][1];

    if (oneOverlapTwo || twoOverlapOne) {
      result.push([
        Math.max(arr1[i][0], arr2[j][0]),
        Math.min(arr1[i][1], arr2[j][1])
      ]);
    }

    if (arr1[i][1] < arr2[j][1]) {
      i += 1;
    } else {
      j += 1;
    }
  }

  return result;
}

const result = solution(
  [
    [1, 3],
    [5, 6],
    [7, 9]
  ],
  [
    [2, 3],
    [5, 7]
  ]
);
result; // [[2, 3], [5, 6], [7, 7]]
