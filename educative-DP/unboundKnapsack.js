/**
 * Given the weights and profits of ‘N’ items, we are asked to put these items
 * in a knapsack that has a capacity ‘C’. The goal is to get the maximum profit
 * from the items in the knapsack.
 */

/**
 * ex
 *
 * items: apples (weight - 1, profits - 15)
 *        orange (weight - 2, profits - 20)
 *        melon  (weight - 3, profits - 50)
 * knapsack capacity: 5
 *
 * 2 apples + 1 melon would give the best profit of 80.
 */

/**
 * Note: We need to find a subset of items which will give us
 * maximum profit such that their cumulative weight is not more than
 * a given number 'C'.
 * We can select each item, multiple times
 */

/**
 * Top-down DP
 */

function topDownDP(profits, weights, capacity) {
  const dp = [];

  const recursion = (profits, weights, capacity, curIdx) => {
    // base check
    if (capacity <= 0 || curIdx >= profits.length) {
      return 0;
    }

    dp[curIdx] = dp[curIdx] || [];
    // check if similar sub-problem has been solved
    // a.k.a) if we have a record where at the same index, the capacity was the same
    // use that record
    if (typeof dp[curIdx][capacity] !== "undefined") {
      return dp[curIdx][capacity];
    }

    let profit1 = 0;
    if (weights[curIdx] <= capacity) {
      profit1 =
        profits[curIdx] +
        recursion(profits, weights, capacity - weights[curIdx], curIdx);
    }
    const profit2 = recursion(profits, weights, capacity, curIdx + 1);

    dp[curIdx][capacity] = Math.max(profit1, profit2);

    return dp[curIdx][capacity];
  };

  return recursion(profits, weights, capacity, 0);
}

const result1 = topDownDP([15, 50, 60, 90], [1, 3, 4, 5], 8);
result1; // 140

/**
 * Bottom-up
 */

function bottomUpDP(profits, weights, capacity) {
  if (
    capacity <= 0 ||
    profits.length === 0 ||
    weights.length !== profits.length
  )
    return 0;

  const n = profits.length;
  const dp = new Array(n).fill(0).map(() => new Array(capacity + 1).fill(0));

  for (let i = 0; i < n; i++) dp[i][0] = 0;

  for (let i = 0; i < n; i++) {
    for (let c = 1; c <= capacity; c++) {
      let profit1 = 0,
        profit2 = 0;
      if (weights[i] <= c) {
        profit1 = profits[i] + dp[i][c - weights[i]];
      }
      if (i > 0) {
        profit2 = dp[i - 1][c];
      }
      dp[i][c] = Math.max(profit1, profit2);
    }
  }

  return dp[n - 1][capacity];
}

const result2 = bottomUpDP([15, 50, 60, 90], [1, 3, 4, 5], 8);
result2; // 140
