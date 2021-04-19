/**
 * We are given an unsorted array containing ‘n+1’ numbers taken from the
 * range 1 to ‘n’. The array has only one duplicate but it can be repeated
 * multiple times. Find that duplicate number without using any extra space.
 * You are, however, allowed to modify the input array.
 */

/**
 * ex1)
 * input: arr = [1, 4, 4, 3, 2]
 * output: 4
 *
 * ex2)
 * input: arr = [2, 1, 3, 3, 5, 4]
 * output: 3
 */

function solution(arr) {
  let idx = 0;
  while (idx < arr.length) {
    if (arr[idx] !== idx + 1) {
      let curElementMinusOne = arr[idx] - 1;
      if (arr[idx] !== arr[curElementMinusOne]) {
        [arr[idx], arr[curElementMinusOne]] = [
          arr[curElementMinusOne],
          arr[idx]
        ];
      } else {
        return arr[idx];
      }
    } else {
      idx += 1;
    }
  }

  return -1;
}
