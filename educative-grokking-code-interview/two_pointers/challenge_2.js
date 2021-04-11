/**
 * Given two strings containing backspaces (identified by the character ‘#’),
 * check if the two strings are equal.
 */

/**
 * ex1)
 * input: str1 = "xy#z", str2 = "xzz#"
 * output: true
 *
 * both become "xz", thus true
 *
 * ex2)
 * input: str1 = "xy#z", str2 = "xyz#"
 * output: false
 *
 * str1 becomes "xz", str2 becomes "xy", thus false
 */

function solution(str1, str2) {
  const str1Result = strProcessor(str1);
  const str2Result = strProcessor(str2);
  return str1Result === str2Result;
}

function strProcessor(str) {
  return str.split("").reduce((a, c) => {
    if (c === "#") {
      return a.substr(0, a.length - 1);
    }
    return a + c;
  }, "");
}

const result1 = solution("xy#z", "xzz#");
result1; // true
const result2 = solution("xp#", "xyz##");
result2; // true
const result3 = solution("xywrrmp", "xywrrmu#p");
result3; // true

function alternateSolution(str1, str2) {
  let index1 = str1.length - 1,
    index2 = str2.length - 1;

  while (index1 >= 0 || index2 >= 0) {
    let i1 = getNextValidCharIndex(str1, index1),
      i2 = getNextValidCharIndex(str2, index2);

    if (i1 < 0 && i2 < 0) {
      return true;
    }
    if (i1 < 0 || i2 < 0) {
      return false;
    }
    if (str[i1] !== str[i2]) {
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }

  return true;
}

function getNextValidCharIndex(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === "#") {
      backspaceCount += 1;
    } else if (backspaceCount > 0) {
      backspaceCount -= 1;
    } else {
      break;
    }

    index -= 1;
  }

  return index;
}
