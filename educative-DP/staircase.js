/**
 * Given a stair with ‘n’ steps, implement a method to count how many
 * possible ways are there to reach the top of the staircase, given that,
 * at every step you can either take 1 step, 2 steps, or 3 steps.
 */

/**
 * ex.
 * number of stairs: 3
 * number of ways: 4
 * [1,1,1], [1,2], [2,1], [3]
 */

/**
 * Top-down DP with memoization
 */

function topDownDP(n) {
  const dp = [];

  const recursion = num => {
    // if no more steps to take, there is only 1 way
    // if one step, there is only 1 way
    if (num <= 1) return 1;
    // if two more steps, 1,1 / 2 is possible, so 2 ways
    if (num === 2) return 2;

    if (typeof dp[num] === "undefined") {
      const take1step = recursion(num - 1);
      const take2step = recursion(num - 2);
      const take3step = recursion(num - 3);
      dp[num] = take1step + take2step + take3step;
    }

    return dp[num];
  };

  return recursion(n);
}

const result1 = topDownDP(3);
const result2 = topDownDP(4);
result1; // 4
result2; // 7

/**
 * Bottom-up DP
 */

function bottomUpDP(n) {
  const dp = [1, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[n];
}

const result3 = bottomUpDP(3);
const result4 = bottomUpDP(4);
result3; // 4
result4; // 7
