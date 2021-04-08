/**
 * Given a string with lowercase letters only, if you are allowed to replace
 * no more than ‘k’ letters with any letter, find the length of the longest
 * substring having the same letters after replacement.
 */

/**
 * ex1)
 * input: 'aabccbb' k: 2
 * output: 5
 *
 * replacing 'cc' with 'bb' will have longest repeating substring 'bbbbb'
 *
 * ex2)
 * input: 'abbcb', k: 1
 * output: 4
 *
 * replacing 'c' with 'b' will have the longest repeating substring 'bbbb'
 */

function solution(str, k) {
  let windowStart = 0,
    maxLen = 0,
    maxRepeatLetterCount = 0,
    charMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charMap)) {
      charMap[rightChar] = 0;
    }
    charMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(...Object.values(charMap));

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = str[windowStart];
      charMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

const result = solution("aabccbb", 2);
result; // 5
