/**
 * Given a rod of length ‘n’, we are asked to cut the rod and sell the pieces
 * in a way that will maximize the profit. We are also given the price of
 * every piece of length ‘i’ where ‘1 <= i <= n’.
 */

/**
 * bottom up DP
 */

function bottomUp(lengths, prices, n) {
  const len = lengths.length;
  const dp = new Array(len).fill(0).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    dp[0][i] = i === lengths[0] ? prices[0] : 0;
  }

  for (let r = 0; r < len; r++) {
    for (let c = 1; c <= n; c++) {
      let exclude = r > 0 ? dp[r - 1][c] : 0;
      let include = c - lengths[r] >= 0 ? prices[r] + dp[r][c - lengths[r]] : 0;
      dp[r][c] = Math.max(include, exclude);
    }
  }

  return dp[len - 1][n];
}

const result = bottomUp([1, 2, 3, 4, 5], [2, 6, 7, 10, 13], 5);
result; // 14
