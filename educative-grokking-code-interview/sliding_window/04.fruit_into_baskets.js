/**
 * Given an array of characters where each character represents a fruit tree,
 * you are given two baskets, and your goal is to put maximum number of fruits
 * in each basket.
 * The only restriction is that each basket can have only one type of fruit.
 */

/**
 * ex1)
 * input: fruits = ['a', 'b', 'c', 'a', 'c']
 * output: 3
 *
 * 2 'c' in one basket, 1 'a' in other basket from index 2-4
 *
 * ex2)
 * input: frutis = ['a', 'b', 'c', 'b', 'b', 'c']
 * output: 5
 *
 * 3 'b' in one basket, 2 'c' in other basket from index 1-5
 */

function solution(fruits) {
  let windowStart = 0,
    maxLen = 0,
    fruitMap = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];

    if (!(rightFruit in fruitMap)) {
      fruitMap[rightFruit] = 0;
    }
    fruitMap[rightFruit] += 1;

    while (Object.keys(fruitMap).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitMap[leftFruit] -= 1;
      if (fruitMap[leftFruit] === 0) {
        delete fruitMap[leftFruit];
      }
      windowStart += 1;
    }

    maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
  }

  return maxLen;
}

const result = solution(["a", "b", "c", "b", "b", "c"]);
result; // 5
