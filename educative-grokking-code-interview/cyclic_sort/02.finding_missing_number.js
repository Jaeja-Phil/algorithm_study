/**
 * We are given an array containing ‘n’ distinct numbers taken
 * from the range 0 to ‘n’. Since the array has only ‘n’ numbers
 * out of the total ‘n+1’ numbers, find the missing number.
 */

/**
 * ex1)
 * input: arr = [4, 0, 3, 1]
 * output: 2
 *
 * ex2)
 * input: arr = [8, 3, 5, 2, 4, 6, 0, 1]
 * output: 7
 */

function solution(arr) {
  let currentIdx = 0;
  const n = arr.length;

  // perform cyclic sort (check 01.cyclic_sort.js)
  // range from 0 to n, so changes have been applied accordingly.
  while (currentIdx < n) {
    const currentNum = arr[currentIdx];
    currentNum;
    currentIdx;
    // currentNum < n because arr[currentNum] can potentially be undefined
    // if it is the biggest number
    if (currentNum < n && currentIdx !== currentNum) {
      [arr[currentIdx], arr[currentNum]] = [arr[currentNum], arr[currentIdx]];
    } else {
      currentIdx += 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (arr[i] !== i) {
      return i;
    }
  }

  return n;
}

const result = solution([4, 0, 3, 1]);
result; // 2
