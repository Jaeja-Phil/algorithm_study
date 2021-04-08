/**
 * Given a string and a pattern, find out if the string contains any
 * permutation of the pattern.
 */

/**
 * ex1)
 * input: str: 'oidbcaf' pattern: 'abc'
 * output: true
 *
 * string contains 'bca' which is a permuation of 'abc'
 *
 * ex2)
 * input: str: 'odicf' pattern: 'dc'
 * output: false
 *
 * string doesnt contain any permutation of 'dc'
 */

function solution(str, pattern) {
  if (str.length < pattern.length) return false;

  const charFrequency = pattern.split("").reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});

  let windowStart = 0,
    matched = 0;
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) return true;

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  return false;
}

const result = solution("oidbcaf", "abc");
result; // true
