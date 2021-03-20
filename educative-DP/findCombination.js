/**
 * Imagine a game where a player can score 1, 2, or 4 runs.
 * Given a score, nn, find the total number of ways to score n runs.
 */

/**
 * Example: player has to score 3
 * - 1, 1, 1
 * - 1, 2
 * - 2, 1
 *
 * answer: 3
 */

/**
 * Example: player has to score 4
 * - 1, 1, 1, 1
 * - 1, 1, 2
 * - 1, 2, 1
 * - 2, 1, 1
 * - 2, 2
 * - 4
 *
 * answer: 6
 */

/**
 * Memoization technique
 */
let scoringOptionRecursive = (n, result) => {
  if (n < 0) return 0;

  if (result[n] > 0) {
    return result[n];
  }

  result[n] =
    scoringOptionRecursive(n - 1, result) +
    scoringOptionRecursive(n - 2, result) +
    scoringOptionRecursive(n - 4, result);

  return result[n];
};

let scoringOptions = n => {
  if (n <= 0) {
    return 0;
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result[i] = -1;
  }

  result[0] = 1;

  scoringOptionRecursive(n, result);
  result;
  return result[n];
};

const result = scoringOptions(5);
result; // 10

/**
 * Solution with Dynamic Programming
 *
 * Pseudocode:
 * - max score is 4, save the last four ways to calculate the number of ways for given n
 * - on each iteration, result will be the sum of 3rd, 2nd, and 0th index of the result arr
 *   - same as adding n - 1, n - 2, n - 4
 * - "slide" the result towards left, save current result at the last index
 */

let solutionDp = n => {
  if (n <= 0) return 0;

  let result = [0, 0, 0, 1];

  for (let i = 1; i <= n; i++) {
    let currentSum = result[3] + result[2] + result[0];
    // slide left all
    result.push(currentSum);
    result.shift();
  }

  return result[3];
};

const result2 = solutionDp(5);
result2; // 10
