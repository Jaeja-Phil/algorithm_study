/**
 * Given an infinite supply of 'n' coin denominations and a total money amount,
 * find the minimum number of coins needed to make up that amount
 */

/**
 * Example1:
 * denominations: { 1, 2, 3 }
 * amount: 5
 * output: 2
 * --> 3, 2
 */

/**
 * Example2:
 * denominations: { 1, 2, 5 }
 * amount: 9
 * output: 3
 * --> 5, 2, 2
 */

/**
 * Pseudocode:
 *
 * Brute Force:
 * find all combinations that would lead to the amount
 * get the minimum count among those combinations
 *
 * DP:
 * Top-down with memoization
 *
 * store the result of solved sub-problems
 * ex) 1 --> 1
 *     2 --> 1 ,1 / 2,
 *     3 --> 1, 1, 1 / 1, 2
 */

let countChange = function (denominations, total) {
  const dp = [];

  function countChangeRecursive(denominations, total, currentIndex) {
    // base check
    if (total === 0) return 0;

    if (denominations.length === 0 || currentIndex >= denominations.length) {
      return Number.MAX_VALUE;
    }

    dp[currentIndex] = dp[currentIndex] || [];
    // check if we have not already processed a similar sub-problem
    if (typeof dp[currentIndex][total] === "undefined") {
      // recursive call after selecting the coin at the currentIndex
      // if the coin at currentIndex exceeds the total, we shouldn't process this
      let count1 = Number.MAX_VALUE;
      if (denominations[currentIndex] <= total) {
        const res = countChangeRecursive(
          denominations,
          total - denominations[currentIndex],
          currentIndex
        );
        if (res != Number.MAX_VALUE) {
          count1 = res + 1;
        }
      }

      // recursive call after excluding the coin at the currentIndex
      const count2 = countChangeRecursive(
        denominations,
        total,
        currentIndex + 1
      );
      dp[currentIndex][total] = Math.min(count1, count2);
    }
    return dp[currentIndex][total];
  }
  const result = countChangeRecursive(denominations, total, 0);
  return result === Number.MAX_VALUE ? -1 : result;
};

const result = countChange([1, 2, 3], 5);
result;

/**
 * DP with bottom-up approach
 *
 * populate every possible total with minimum number of coins needed
 */

const countChangeBottomUp = (denominations, total) => {
  const n = denominations.length;
  const dp = Array(denominations.length)
    .fill(0)
    .map(() => {
      const arr = Array(total + 1).fill(Number.MAX_VALUE);
      // populate total = 0 columns, dont need any coin to make zero total
      arr[0] = 0;
      return arr;
    });

  for (let i = 0; i < n; i++) {
    for (let t = 1; t <= total; t++) {
      if (i > 0) {
        // exclude the coin
        dp[i][t] = dp[i - 1][t];
      }
      if (t >= denominations[i]) {
        // include the coin
        dp[i][t] = Math.min(dp[i][t], dp[i][t - denominations[i]] + 1);
      }
    }
  }

  return dp[n - 1][total] === Number.MAX_VALUE ? -1 : dp[n - 1][total];
};

const result2 = countChangeBottomUp([1, 2, 3], 5);
result2;
