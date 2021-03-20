function solution(inp_str) {
  const ruleOne = str => str.length <= 15 && str.length >= 8;
  const ruleTwo = str => !str.match(/[^a-zA-Z0-9~!@#$%^&*]/g);
  const ruleThree = str => {
    const group1 = str.match(/[a-z]/g);
    const group2 = str.match(/[A-Z]/g);
    const group3 = str.match(/[0-9]/g);
    const group4 = str.match(/[~!@#$%^&*]/g);

    return (
      [group1, group2, group3, group4].reduce((a, c) => {
        if (c) return a + 1;
        return a;
      }, 0) >= 3
    );
  };
  const ruleFour = str => {
    let consecutiveCount = 1;
    let maxConsecutiveCount = 0;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i + 1] === str[i]) {
        consecutiveCount += 1;
        if (maxConsecutiveCount < consecutiveCount) {
          maxConsecutiveCount = consecutiveCount;
        }
      } else {
        consecutiveCount = 1;
      }
    }

    return maxConsecutiveCount <= 3;
  };
  const ruleFive = str => {
    const wordMap = {};
    for (let i = 0; i < str.length; i++) {
      wordMap[str[i]] = wordMap[str[i]] + 1 || 1;
      if (wordMap[str[i]] >= 5) return false;
    }
    return true;
  };

  const ruleMap = {
    1: ruleOne,
    2: ruleTwo,
    3: ruleThree,
    4: ruleFour,
    5: ruleFive
  };

  const result = [];
  for (let i = 1; i <= 5; i++) {
    const ruleTest = ruleMap[i](inp_str);
    if (!ruleTest) {
      result.push(i);
    }
  }

  if (result.length === 0) return [0];
  return result;
}

const result = solution("aaaaZZZZ)");
result; // [2]
