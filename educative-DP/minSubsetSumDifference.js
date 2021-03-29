/**
 * Given a set of positive numbers, partition the set into two subsets
 *  with minimum difference between their subset sums.
 */

/**
 * Top-down DP with memoization
 */

function topDownDP(num) {
  const dp = [];

  const recursion = (num, curIdx, sum1, sum2) => {
    // base check
    if (curIdx === num.length) return Math.abs(sum1 - sum2);

    dp[curIdx] = dp[curIdx] || [];

    // check if similar problem has been processed
    if (typeof dp[curIdx][sum1] === "undefined") {
      const diff1 = recursion(num, curIdx + 1, sum1 + num[curIdx], sum2);
      const diff2 = recursion(num, curIdx + 1, sum1, sum2 + num[curIdx]);
      dp[curIdx][sum1] = Math.min(diff1, diff2);
    }

    return dp[curIdx][sum1];
  };

  const result = recursion(num, 0, 0, 0);
  return result;
}

const result = topDownDP([1, 2, 3, 9]);
result; // 3

/**
 * Bottom-up
 *
 * In this problem, we are trying to find a subset whose sum is as close to S/2 as possible
 * Calculate all the possible sums up to S/2 for all numbers
 *
 * 1. exclude the number
 *    dp[index - 1][s]
 * 2. include the number
 *    dp[index - 1][s - num[index]]
 *
 * if we find a subset that is equal to S/2, that would be our answer
 * if not, we will find a subset that is the biggest (that is between 0 ~ S/2)
 */

function bottomUpDP(nums) {
  const n = nums.length;
  let sum = 0;
  for (let i = 0; i < n; i++) sum += nums[i];

  const requiredSum = Math.floor(sum / 2);
  const dp = new Array(n).fill(false).map(() => new Array(sum + 1).fill(false));

  // populate the sum = 0 column with true because any combination can make 0
  for (let i = 0; i < n; i++) dp[i][0] = true;

  // with only one number, only one subset can be formed which is the number itself
  for (let i = 1; i < requiredSum; i++) {
    dp[0][i] = nums[0] === i;
  }

  // process DP
  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= requiredSum; s++) {
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= nums[i]) {
        dp[i][s] = dp[i - 1][s - nums[i]];
      }
    }
  }

  let sum1 = 0;
  // find the largest index in the last row that is true
  for (let i = requiredSum; i >= 0; i--) {
    if (dp[n - 1][i]) {
      sum1 = i;
      break;
    }
  }

  const sum2 = sum - sum1;
  return Math.abs(sum1 - sum2);
}

const result2 = bottomUpDP([1, 2, 3, 9]);
result; //
