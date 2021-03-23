function solution(info, query) {
  const map = {
    cpp: {
      frontend: {
        junior: { chicken: [], pizza: [] },
        senior: { chicken: [], pizza: [] }
      },
      backend: {
        junior: { chicken: [], pizza: [] },
        senior: { chicken: [], pizza: [] }
      }
    },
    java: {
      frontend: {
        junior: { chicken: [], pizza: [] },
        senior: { chicken: [], pizza: [] }
      },
      backend: {
        junior: { chicken: [], pizza: [] },
        senior: { chicken: [], pizza: [] }
      }
    },
    python: {
      frontend: {
        junior: { chicken: [], pizza: [] },
        senior: { chicken: [], pizza: [] }
      },
      backend: {
        junior: { chicken: [], pizza: [] },
        senior: { chicken: [], pizza: [] }
      }
    }
  };
  const result = [];
  // process info
  for (let i = 0; i < info.length; i++) {
    const [language, field, exp, soulfood, score] = info[i].split(" ");
    map[language][field][exp][soulfood].push(+score);
  }

  for (let language in map) {
    for (let field in map[language]) {
      for (let exp in map[language][field]) {
        for (let soulfood in map[language][field][exp]) {
          map[language][field][exp][soulfood].sort((a, b) => a - b);
        }
      }
    }
  }

  let count = 0;
  // process query
  for (let i = 0; i < query.length; i++) {
    const queries = query[i].replace(/ and/g, "");
    const [language, field, exp, soulfood, score] = queries.split(" ");
    dfs(map, score, [language, field, exp, soulfood]);
    result.push(count);
    count = 0;
  }

  function dfs(map, score, queries) {
    const currentQuery = queries.shift();
    if (queries.length === 0) {
      let scores;

      if (currentQuery === "-") {
        scores = Object.values(map);
      } else {
        scores = map[currentQuery] ? [map[currentQuery]] : [[]];
      }
      for (let i = 0; i < scores.length; i++) {
        let left = 0;
        let right = scores[i].length - 1;
        while (left <= right) {
          let mid = Math.floor((left + right) / 2);
          if (score <= scores[i][mid]) right = mid - 1;
          else left = mid + 1;
        }
        count += scores[i].length - left;
      }
      return;
    }

    if (currentQuery in map) {
      dfs(map[currentQuery], score, [...queries]);
    } else {
      const keys = Object.keys(map);
      for (let i = 0; i < keys.length; i++) {
        dfs(map[keys[i]], score, [...queries]);
      }
    }
  }

  return result;
}

const result = solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50"
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
  ]
);

result;
