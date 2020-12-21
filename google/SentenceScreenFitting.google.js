const solution = (sentence, rows, cols) => {
  let currentRow = 0,
    currentCol = 0,
    count = 0,
    sentenceLength = sentence.length;

  while (currentRow < rows) {
    if (currentCol + sentence[count % sentenceLength].length <= cols) {
      currentCol += sentence[count % sentenceLength].length;
      count++;
    }
    if (currentCol + 1 >= cols) {
      currentCol = 0;
      currentRow += 1;
    } else {
      currentCol += 1;
    }
  }

  return Math.floor(count / sentenceLength);
};

const result = solution(["a", "bcd", "e"], 3, 6);
result;
