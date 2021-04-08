/**
 * Given a sorted array, create a new array containing squares of all
 * the numbers of the input array in the sorted order.
 */

/**
 * ex1)
 * input: [-2, -1, 0, 2, 3]
 * output: [0, 1, 4, 4, 9]
 *
 * ex2)
 * input: [-3, -1, 0, 1, 2]
 * output: [0, 1, 1, 4, 9]
 */

function solution(arr) {
  const n = arr.length;
  const squares = new Array(n).fill(0);
  let highestSquareIdx = n - 1;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    let leftSquare = arr[left] ** 2,
      rightSquare = arr[right] ** 2;

    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIdx] = rightSquare;
      right -= 1;
    }
    highestSquareIdx -= 1;
  }

  return squares;
}

const result = solution([-2, -1, 0, 2, 3]);
result; // [0, 1, 4, 4, 9]
