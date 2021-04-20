/**
 * Write a function to sort the objects in-place on their creation
 * sequence number in O(n) and without any extra space.
 * For simplicity, let’s assume we are passed an integer array
 * containing only the sequence numbers, though each number is actually an object.
 */

/**
 * ex1)
 * input: arr = [3, 1, 5, 4, 2]
 * output: [1, 2, 3, 4, 5]
 */

function solution(arr) {
  let idx = 0;
  while (idx < arr.length) {
    // numbers range: 1 ~ n
    const curElementMinusOne = arr[i] - 1;
    if (arr[idx] !== arr[curElementMinusOne]) {
      // when current index's number doesnt match, swap it with where it is suppsed to be
      [arr[iidx], arr[curElementMinusOne]] = [
        arr[curElementMinusOne],
        arr[idx]
      ];
    } else {
      // when current index's number is matched, move on to the next index
      idx += 1;
    }
  }

  return arr;
}
