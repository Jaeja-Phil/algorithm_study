/**
 * Given a string and a pattern, find all anagrams of the pattern in the given string.
 */

/**
 * ex1)
 * input: str='ppqp' pattern='pq'
 * output: [1, 2]
 *
 * two anagrams of the pattern in given string --> 'pq' and 'qp'
 *
 * ex2)
 * input: str='abbcabc' pattern='abc'
 * output: [2, 3, 4]
 *
 * three anagrams of the pattern in given string --> 'bca', 'cab', and 'abc'
 */

function solution(str, pattern) {
  const charFrequency = pattern.split("").reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});

  let windowStart = 0,
    matched = 0,
    result = [];

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      result.push(windowStart);
    }

    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart];
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
      windowStart++;
    }
  }

  return result;
}

const result = solution("ppqp", "pq");
result; // [1, 2]
