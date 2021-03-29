/**
 * Give three strings ‘m’, ‘n’, and ‘p’, write a method to find out
 * if ‘p’ has been formed by interleaving ‘m’ and ‘n’. ‘p’ would be
 * considered interleaving ‘m’ and ‘n’ if it contains all the letters
 * from ‘m’ and ‘n’ and the order of letters is preserved too.
 */

/**
 * Top-down DP with memoization
 */

function topDownDP(m, n, p) {
  const dp = {};

  const recursion = (m, n, p, mIndex, nIndex, pIndex) => {
    // if we reached the end of all strings
    if (mIndex === m.length && nIndex === n.length && pIndex === p.length)
      return true;

    // if we reached the end of 'p' but not 'm' or 'n' (still some characters left)
    if (pIndex === p.length) return false;

    let subProblemKey = `${mIndex}-${nIndex}-${pIndex}`;
    if (typeof dp[subProblemKey] === "undefined") {
      let b1 = false,
        b2 = false;
      if (mIndex < m.length && m[mIndex] === p[pIndex]) {
        b1 = recursion(m, n, p, mIndex + 1, nIndex, pIndex + 1);
      }

      if (nIndex < n.length && n[nIndex] === p[pIndex]) {
        b2 = recursion(m, n, p, mIndex, nIndex + 1, pIndex + 1);
      }

      dp[subProblemKey] = b1 || b2;
    }

    return dp[subProblemKey];
  };

  return recursion(m, n, p, 0, 0, 0);
}

const result = topDownDP("abd", "cef", "abcdef");
result; // true

function bottomUpDP(m, n, p) {
  const dp = new Array(m.length + 1)
    .fill(false)
    .map(() => new Array(n.length + 1).fill(false));

  if (m.length + n.length !== p.length) return false;

  for (let mIndex = 0; mIndex <= m.length; mIndex++) {
    for (let nIndex = 0; nIndex <= n.length; nIndex++) {
      // if 'm' and 'n' are empty, 'p' must be empty too
      if (mIndex === 0 && nIndex === 0) {
        dp[mIndex][nIndex] = true;
      }
      // if 'm' is empty, we need to check leterleaving with 'n' only
      else if (mIndex === 0 && n[nIndex - 1] === p[mIndex + nIndex - 1]) {
        dp[mIndex][nIndex] = dp[mIndex][nIndex - 1];
      }
      // if 'n' is empty, we need to check leterleaving with 'm' only
      else if (nIndex === 0 && m[mIndex - 1] === p[mIndex + nIndex - 1]) {
        dp[mIndex][nIndex] = dp[mIndex - 1][nIndex];
      } else {
        // if the letter of 'm' and 'p' match, take whatever is matched till mIndex - 1
        if (mIndex > 0 && m[mIndex - 1] === p[mIndex + nIndex - 1]) {
          dp[mIndex][nIndex] = dp[mIndex - 1][nIndex];
        }
        // if the letter of 'n' and 'p' match, we take whatever is matched till nIndex - 1
        // note the '||', this is required when we have common letters
        if (nIndex > 0 && n[nIndex - 1] === p[mIndex + nIndex - 1]) {
          dp[mIndex][nIndex] = dp[mIndex][nIndex] || dp[mIndex][nIndex - 1];
        }
      }
    }
  }

  return dp[m.length][n.length];
}

const result2 = bottomUpDP("abd", "cef", "abcdef");
result2; // true
