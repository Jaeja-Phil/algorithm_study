/**
 * Given a set of positive numbers, define if a subset
 * exists whose sum is equal to a given number 'S'
 */

/**
 * Bottom-up DP
 *
 * - try to find with all possible sums with every subset
 * to populate the array dp[totalNumbers][s + 1]
 *
 * for every possible sum 's', there are two options
 * 1. exclude the number
 *    dp[index - 1][s]
 * 2. include the number if the value is no more than 's'
 *    dp[index - 1][s - num[index]]
 */

/**
 * implementation
 */

function subsetSum(nums, sum) {
  const n = nums.length;
  const dp = new Array(n).fill(false).map(() => new Array(sum + 1).fill(false));

  // every combination can make 0
  for (let i = 0; i < n; i++) dp[i][0] = true;

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) dp[0][s] = nums[0] === s;

  // processing DP
  for (let i = 1; i < n; i++) {
    for (let s = 1; s <= sum; s++) {
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= nums[i]) {
        dp[i][s] = dp[i - 1][s - nums[i]];
      }
    }
  }

  return dp[n - 1][sum];
}

const result = subsetSum([1, 2, 3, 4], 6);
result; // true

function subsetSumOptimized(num, sum) {
  const n = num.length;
  const dp = Array(sum + 1).fill(false);

  // handle sum=0, as we can always have '0' sum with an empty set
  dp[0] = true;

  // with only one number, we can have a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s++) {
    dp[s] = num[0] == s;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i++) {
    for (let s = sum; s >= 0; s--) {
      // if dp[s]==true, this means we can get the sum 's' without num[i], hence we can move on to
      // the next number else we can include num[i] and see if we can find a subset to get the
      // remaining sum
      if (!dp[s] && s >= num[i]) {
        dp[s] = dp[s - num[i]];
      }
    }
  }

  return dp[sum];
}
