/**
 * We are given an array containing positive and negative numbers.
 * Suppose the array contains a number ‘M’ at a particular index.
 * Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative
 * move backwards ‘M’ indices.
 * You should assume that the array is circular
 */

/**
 * ex1)
 * input: arr = [1, 2, -1, 2, 2]
 * output: true
 *
 * cycle among indices 0 - 1 - 3 - 0
 *
 * ex2)
 * input: arr = [2, 2, -1, 2]
 * output: true
 *
 * cycle among indices 1 - 3 - 1
 *
 * ex3)
 * input: arr = [2, 1, -1, 2]
 * output: false
 *
 * no cycle
 */

function solution(arr) {
  for (i = 0; i < arr.length; i++) {
    let isForward = arr[i] >= 0; // if we are moving forward or not
    let slow = i,
      fast = i;

    // if slow or fast becomes '-1' this means we can't find cycle for this number
    while (true) {
      // move one step for slow pointer
      slow = findNextIndex(arr, isForward, slow);
      // move one step for fast pointer
      fast = findNextIndex(arr, isForward, fast);
      if (fast !== -1) {
        // move another step for the fast pointer
        fast = findNextIndex(arr, isForward, fast);
      }
      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    if (slow !== -1 && slow === fast) {
      return true;
    }
  }

  return false;
}

function findNextIndex(arr, isForward, currentIndex) {
  let direction = arr[currentIndex] >= 0;

  if (isForward !== direction) {
    return -1; // change in direction, return -1
  }

  let nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) {
    nextIndex += arr.length; // wrap around for negative numbers
  }

  // one element cycle, return -1
  if (nextIndex === currentIndex) {
    nextIndex = -1;
  }

  return nextIndex;
}

const result = solution([1, 2, -1, 2, 2]);
console.log(result);
