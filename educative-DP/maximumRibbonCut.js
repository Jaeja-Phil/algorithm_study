/**
 * We are given a ribbon of length ‘n’ and a set of possible ribbon lengths.
 * We need to cut the ribbon into the maximum number of pieces that comply
 * with the above-mentioned possible lengths. Write a method that will return
 * the count of pieces.
 */

/**
 * ex1)
 * n: 5
 * ribbon lengths: [2, 3, 5]
 * output: 2
 *
 * piece made of 2 and 3
 */

/**
 * ex2)
 * n: 7
 * ribbon lengths: [2, 3]
 * otput: 3
 *
 * piece made of 2, 2 and 3
 */

/**
 * bottom up DP
 */

function bottomUp(ribbonLengths, total) {
  const n = ribbonLengths.length;
  const dp = new Array(n)
    .fill(0)
    .map(() => new Array(total + 1).fill(Number.MIN_VALUE));

  // we dont need any ribbon to make 0 total
  for (let i = 0; i < n; i++) {
    dp[i][0] = 0;
  }

  for (let i = 0; i < n; i++) {
    for (let t = 1; t <= total; t++) {
      // exclude ribbon
      if (i > 0) {
        dp[i][t] = dp[i - 1][t];
      }
      // include ribbon & check if remaining length can be cut into available lengths
      if (
        t >= ribbonLengths[i] &&
        dp[i][t - ribbonLengths[i]] !== Number.MIN_VALUE
      ) {
        dp[i][t] = Math.max(dp[i][t], dp[i][t - ribbonLengths[i]] + 1);
      }
    }
  }

  return dp[n - 1][total] === Number.MIN_VALUE ? -1 : dp[n - 1][total];
}
