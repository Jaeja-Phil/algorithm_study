function solution(table, languages, preference) {
  const fieldNameList = [];
  const totalScore = [];
  const scoreTable = {};
  let maxScore = 0;
  let maxIndex = [];

  for (let i = 0; i < table.length; i++) {
    const [field, ...languages] = table[i].split(" ");
    fieldNameList.push(field);
    totalScore.push(0);
    scoreTable[field] = {};

    for (let j = 0; j < languages.length; j++) {
      scoreTable[field][languages[j]] = 5 - j;
    }
  }

  for (let i = 0; i < fieldNameList.length; i++) {
    for (let j = 0; j < languages.length; j++) {
      const curLanguage = languages[j];
      const curPreference = preference[j];
      totalScore[i] +=
        scoreTable[fieldNameList[i]][curLanguage] * curPreference || 0;
    }

    if (totalScore[i] > maxScore) {
      maxScore = totalScore[i];
      maxIndex = [i];
      continue;
    }

    if (totalScore[i] === maxScore) {
      maxIndex.push(i);
    }
  }

  return maxIndex.map(index => fieldNameList[index]).sort()[0];
}

// 개발자가 사용하는 언어의 언어 선호도 x 직업군 언어 점수의 총합이 가장 높은
//  직업군을 return 하도록 solution 함수를 완성해주세요.

const result = solution(
  [
    "SI JAVA JAVASCRIPT SQL PYTHON C#",
    "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
    "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
    "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
    "GAME C++ C# JAVASCRIPT C JAVA"
  ],
  ["JAVA", "JAVASCRIPT"],
  [7, 5]
);

result; // 'hardware'
