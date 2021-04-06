/**
 * Given a string, find the length of the longest substring, which
 * has no repeating characters.
 */

/**
 * ex1)
 * input: 'aabccbb'
 * output: 3
 *
 * 'abc' is the longest substring without any repeating characters
 *
 * ex2)
 * input: 'abbbb'
 * output: 2
 *
 * 'ab' is the longest substring without any repeating characters
 */

function solution(str) {
  let windowStart = 0,
    maxLen = 0,
    charMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charMap) {
      windowStart = charMap[rightChar] + 1;
    }

    charMap[rightChar] = windowEnd;
    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

const result = solution("aabccbb");
result; // 3
