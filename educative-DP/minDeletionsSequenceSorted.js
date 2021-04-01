/**
 * Given a number sequence, find the minimum number of elements that
 * should be deleted to make the remaining sequence sorted.
 */

/**
 * ex1)
 * input: [4, 2, 3, 6, 10, 1, 12]
 * output: 2
 *
 * delete 4 and 1 to make remaining sequence sorted [2, 3, 6, 10, 12]
 */

/**
 * ex2)
 * input: [-4, 10, 3, 7, 15]
 * output: 1
 *
 * delete 10 to make remaining sequence sorted [-4, 3, 7, 15]
 */

/**
 * bottom-up DP
 */

const findMinDeletions = nums => {
  // subtracting the length of LIS from the length of the input array to get
  // minimum number of deletions
  return nums.length - findLISLength(nums);
};

function findLISLength(nums) {
  const dp = new Array(nums.length).fill(0);

  dp[0] = 1;

  let maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      // if the number at current index(i) is bigger than the number at the previous index,
      // we increment the count for LIS up to the current index
      // but if there is a bigger LIS without including the number at the current index,
      // take that value
      if (nums[i] > nums[j] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
        maxLength = Math.max(maxLength, dp[i]);
      }
    }
  }

  return maxLength;
}

const result = findMinDeletions([4, 2, 3, 6, 10, 1, 12]);
result; // 2
