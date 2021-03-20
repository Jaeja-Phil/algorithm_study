/**
 * Find an efficient algorithm to find the maximum sum of a subsequence
 * in an array so that no consecutive elements are part of this subsequence.
 */

/**
 * Pseudocode:
 *
 * iterate over entire array
 * in every iteration, pick the max of the two values:
 * 1. max sum of the last iteration
 * 2. max sum of second last iteration + current iteration index
 * (similar to fibonacci)
 *
 * ex)
 * input
 * [1, -1, 6, -4, 2, 2]
 * result
 * [0,  0, 0,  0, 0, 0]
 *
 * input
 * [1, -1, 6, -4, 2, 2]
 * result
 * [1,  1, 0,  0, 0, 0]
 *
 * input
 * [1, -1, 6, -4, 2, 2]
 * result
 * [1,  1, 7,  0, 0, 0]  --> result[2] = Max(result[1], result[0] + input[2]) --> result[0] + input[2]
 *
 * input
 * [1, -1, 6, -4, 2, 2]
 * result
 * [1,  1, 7,  7, 0, 0] --> result[3] = Max(result[2], result[1] + input[3]) --> result[2]
 *
 * input
 * [1, -1, 6, -4, 2, 2]
 * result
 * [1,  1, 7,  7, 9, 0] --> result[4] = Max(result[3], result[2] + input[4]) --> result[2] + input[4]
 *
 * input
 * [1, -1, 6, -4, 2, 2]
 * result
 * [1,  1, 7,  7, 9, 9] --> result[5] = Max(result[4], result[3] + input[5]) --> both same, 9
 *
 * ANSWER = 9
 *
 */

/**
 * Pseudocode from leetcode: house-robber
 *
 * 1. We define a table which we will use to store the results of our sub-problems. Let's call this table maxRobbedAmount
 * where maxRobbedAmount[i] is the same value that would be returned by recurse(i) in the previous solution.
 * 2. We set maxRobbedAmount[N] to 0 since this means the robber doesn't have any houses left to rob, thus zero profit.
 * Additionally, we set maxRobbedAmount[N - 1] to nums[N - 1] because in this case, there is only one house to rob
 * which is the last house. Robbing it will yield the maximum profit.
 * 3. We iterate from N - 2 down to 0 and we set
 * maxRobbedAmount[i] = max(maxRobbedAmount[i + 1], maxRobbedAmount[i + 2] + nums[i]).
 * Note that this is the same as the recursive formulation in the previous solution.
 * The only difference is that we have already calculated the solutions to the sub-problems and we simply reuse
 * the solutions in O(1) time when calculating the solution to the main problem.
 * 4. We return the value in maxRobbedAmount[0].
 */

function maxSumSubSequence(arr) {
  if (arr.length <= 2) return Math.max(...arr, 0);

  const result = [];
  result.push(arr[0]);
  result.push(Math.max(arr[0], arr[1]));

  for (let i = 2; i < arr.length; i++) {
    result[i] = Math.max(arr[i] + result[i - 2], result[i - 1]);
  }

  return result[result.length - 1];
}

const result = maxSumSubSequence([1, -1, 6, -4, 2, 2]);
result;
