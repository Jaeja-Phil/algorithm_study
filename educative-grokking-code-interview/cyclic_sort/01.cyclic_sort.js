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
  let i = 0;
  while (i < arr.length) {
    // numbers range: 1 ~ n
    const j = arr[i] - 1;
    if (arr[i] !== arr[j]) {
      // when current index's number doesnt match, swap it with where it is suppsed to be
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      // when current index's number is matched, move on to the next index
      i += 1;
    }
  }

  return arr;
}
