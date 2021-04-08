/**
 * Given a string and a list of words, find all the starting indices of
 * substrings in the given string that are a concatenation of all the
 * given words exactly once without any overlapping of words.
 * It is given that all words are of the same length.
 */

/**
 * ex1)
 * input: str='catfoxcat' words=['cat', 'fox']
 * output: [0, 3]
 *
 * 2 substring containing both the words are 'catfox' and 'foxcat'
 *
 * ex2)
 * input: str='catcatfoxfox' words=['cat', 'fox']
 * output: [3]
 *
 * 'catfox' is the only substring containing both the words
 */

function solution(str, words) {
  const wordFrequency = words.reduce((a, c) => {
    a[c] = a[c] + 1 || 1;
    return a;
  }, {});

  const result = [],
    wordsCount = words.length,
    wordLength = words[0].length;

  for (let i = 0; i < str.length - wordsCount * wordLength + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < wordsCount; j++) {
      const nextWordIndex = i + j * wordLength;
      const word = str.substring(nextWordIndex, nextWordIndex + wordLength);

      if (!(word in wordFrequency)) {
        break;
      }

      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) {
        result.push(i);
      }
    }
  }

  return result;
}

const result = solution("catcatfoxfox", ["cat", "fox"]);
result; // [3]
