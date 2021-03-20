/**
 * suppose there is 1cent, 2cent, and 5cent coins.
 * we want to find a way to give 7 cents
 */

/**
 * input = 7
 *
 * - 1, 1, 1, 1, 1, 1, 1
 * - 1, 1, 1, 1, 1, 2
 * - 1, 1, 1, 2, 2
 * - 1, 2, 2, 2
 * - 1, 1, 5
 * - 2, 5
 *
 * total = 6 methods
 */

/**
 * use DP to solve this issue
 */

/**
 * Pseudocode:
 * - create an array of size greater than input by 1
 * - store 1 at every index
 * - for different coin value, add the value of arr[index - coinValue]
 */

function coinChange(n, denominators) {
  const arr = new Array(n + 1).fill(0);
  arr[0] = 1;

  for (let i = 0; i < denominators.length; i++) {
    for (let j = denominators[i]; j < arr.length; j++) {
      arr[j] += arr[j - denominators[i]];
    }
  }

  return arr[arr.length - 1];
}

const result = coinChange(7, [1, 2, 5]);
result; // 7
