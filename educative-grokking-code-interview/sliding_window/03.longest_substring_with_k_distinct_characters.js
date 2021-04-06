/**
 * Given a string, find the length of the longest substring in it
 * with no more than K distinct characters.
 */

/**
 * ex1)
 * input: 'araaci', K: 2
 * output: 4
 *
 * 'araa' is the longest substring with no more than 2 distinct characters
 *
 * ex2)
 * input: 'araaci', K: 1
 * output: 2
 * 'aa' is the longest substring with no more than 1 distinct characters
 */

function solution(str, K) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > K) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

const result = solution("araaci", 2);
result; // 4
