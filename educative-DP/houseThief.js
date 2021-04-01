/**
 * There are n houses built in a line. A thief wants to steal the maximum
 * possible money from these houses. The only restriction the thief has is
 * that he can’t steal from two consecutive houses, as that would alert the
 * security system. How should the thief maximize his stealing?
 */

/**
 * ex1)
 * input: [2, 5, 1, 3, 6, 2, 4]
 * output: 15
 *
 * thief should steal from 5, 6, and 4
 */

/**
 * ex2)
 * input: [2, 10, 14, 8, 1]
 * output: 18
 *
 * thief should steal from 10 and 8
 */

/**
 * Top-down DP
 */

function topDownDP(houses) {
  const dp = [];

  const recursion = curIdx => {
    if (curIdx >= houses.length) return 0;

    if (typeof dp[curIdx] === "undefined") {
      // stealing from current house and skip one to steal from the next house
      const stealCurrent = houses[curIdx] + recursion(curIdx + 2);
      // skip current house to steal from adjacent house
      const skipCurrent = recursion(curIdx + 1);

      dp[curIdx] = Math.max(stealCurrent, skipCurrent);
    }

    return dp[curIdx];
  };

  return recursion(0);
}

const result = topDownDP([2, 5, 1, 3, 6, 2, 4]);
result; // 15

/**
 * Bottm-up DP
 */

function bottomUp(houses) {
  const dp = new Array(houses.length + 1).fill(0);
  dp[1] = houses[0];

  for (let i = 1; i < houses.length; i++) {
    dp[i + 1] = Math.max(houses[i] + dp[i - 1], dp[i]);
  }

  return dp[houses.length];
}

const result2 = bottomUp([2, 5, 1, 3, 6, 2, 4]);
result2; // 15
