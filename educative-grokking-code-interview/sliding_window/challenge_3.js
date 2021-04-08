/**
 * Given a string and a pattern, find the smallest substring in the
 * given string which has all the characters of the given pattern.
 */

/**
 * ex1)
 * input: string='aabdec' pattern='abc'
 * output: 'abdec'
 *
 * smallest substring having all characters of pattern is 'abdec'
 *
 * ex2)
 * input: string='abdbca' pattern='abc'
 * output: 'bca'
 *
 * smallest substring having all characters of pattern is 'bca'
 */

function solution(str, pattern) {
  const charFrequency = pattern.split("").reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});

  let windowStart = 0,
    matched = 0,
    result = str;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    while (matched === pattern.length) {
      const currentWindowChar = str.slice(windowStart, windowEnd + 1);
      result =
        currentWindowChar.length < result.length ? currentWindowChar : result;
      currentWindowChar;
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

const result = solution("aabdec", "abc");
result; // 'abdec'
