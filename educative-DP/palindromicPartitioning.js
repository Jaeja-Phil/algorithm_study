/**
 * Given a string, we want to cut it into pieces such that each piece is a palindrome.
 * Write a function to return the minimum number of cuts needed.
 */

/**
 * ex1)
 * input: abdbca
 * output: 3
 *
 * 'a', 'bdb', 'c', 'a'
 */

/**
 * ex2)
 * input: cddpd
 * output: 2
 *
 * 'c', 'd', 'dpd'
 */

/**
 * Top-down DP
 */

const topDownDP = function (st) {
  const dp = [];
  const dpIsPalindrome = [];

  function findMPPCutsRecursive(st, startIndex, endIndex) {
    // we don't need to cut the string if it is a palindrome
    if (startIndex >= endIndex || isPalindrome(st, startIndex, endIndex)) {
      return 0;
    }

    // at max, we need to cut the string into its 'length-1' pieces
    let minimumCuts = endIndex - startIndex;
    for (let i = startIndex; i <= endIndex; i++) {
      if (isPalindrome(st, startIndex, i)) {
        // we can cut here as we have a palindrome from 'startIndex' to 'i'
        minimumCuts = Math.min(
          minimumCuts,
          1 + findMPPCutsRecursive(st, i + 1, endIndex)
        );
      }
    }
    return minimumCuts;
  }

  function isPalindrome(st, x, y) {
    dpIsPalindrome[x] = dpIsPalindrome[x] || [];
    if (typeof dpIsPalindrome[x][y] === "undefined") {
      dpIsPalindrome[x][y] = true;
      let i = x,
        j = y;
      while (i <= j) {
        if (st[i++] != st[j--]) {
          dpIsPalindrome[x][y] = false;
          break;
        }
        // use memoization to find if the remaining string is a palindrome
        dpIsPalindrome[i] = dpIsPalindrome[i] || [];
        if (i < j && typeof dpIsPalindrome[i][j] !== "undefined") {
          dpIsPalindrome[x][y] = dpIsPalindrome[i][j];
          break;
        }
      }
    }
    return dpIsPalindrome[x][y];
  }

  return findMPPCutsRecursive(st, 0, st.length - 1);
};

const result1 = topDownDP("abdbca");
result1; // 3

const bottomUp = function (st) {
  // isPalindrome[i][j] will be 'true' if the string from index 'i' to index 'j' is a palindrome
  const isPalindrome = Array(st.length)
    .fill(false)
    .map(() => Array(st.length).fill(false));

  // every string with one character is a palindrome
  for (let i = 0; i < st.length; i++) {
    isPalindrome[i][i] = true;
  }

  // populate isPalindrome table
  for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < st.length; endIndex++) {
      if (st.charAt(startIndex) == st.charAt(endIndex)) {
        // if it's a two character string or if the remaining string is a palindrome too
        if (
          endIndex - startIndex == 1 ||
          isPalindrome[startIndex + 1][endIndex - 1]
        ) {
          isPalindrome[startIndex][endIndex] = true;
        }
      }
    }
  }

  // now lets populate the second table, every index in 'cuts' stores the minimum cuts needed
  // for the substring from that index till the end
  const cuts = Array(st.length).fill(0);
  for (let startIndex = st.length - 1; startIndex >= 0; startIndex--) {
    let minCuts = st.length; // maximum cuts
    for (let endIndex = st.length - 1; endIndex >= startIndex; endIndex--) {
      if (isPalindrome[startIndex][endIndex]) {
        // we can cut here as we got a palindrome
        // also we dont need any cut if the whole substring is a palindrome
        minCuts =
          endIndex == st.length - 1
            ? 0
            : Math.min(minCuts, 1 + cuts[endIndex + 1]);
      }
    }
    cuts[startIndex] = minCuts;
  }

  return cuts[0];
};

const result2 = bottomUp("abdbca");
result2; // 3
