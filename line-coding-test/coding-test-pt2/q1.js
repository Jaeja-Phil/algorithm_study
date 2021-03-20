function solution(program, flag_rules, commands) {
  // flag의 종류들이 저장될 객체
  // key: string
  // - flag name
  // value: string
  // - flag argument type
  const flagRulesMap = {};
  // 각각의 command가 잘 작동할 것인지 저장하는 배열, 정답으로 반환
  const result = [];
  const aliasPending = {};
  for (let i = 0; i < flag_rules.length; i++) {
    const [flag, flagArgumentType, aliasOriginal] = flag_rules[i].split(" ");

    if (aliasOriginal) {
      if (flagRulesMap[aliasOriginal]) {
        flagRulesMap[flag] = flagRulesMap[aliasOriginal];
      } else {
        aliasPending[aliasOriginal] = flag;
      }
    } else {
      flagRulesMap[flag] = flagArgumentType;
      if (aliasPending[flag]) {
        flagRulesMap[aliasPending[flag]] = flagArgumentType;
      }
    }
  }
  // commands 테스트 시작
  for (let i = 0; i < commands.length; i++) {
    const [programName, ...command] = commands[i].split(" ");
    // 각각의 command가 주어진 program 이름으로 시작하는지 확인
    if (programName !== program) {
      // 체크하려고 하는 프로그램이 아니라면 나머지 테스트를 진행할 필요가 없으므로
      // false를 result에 저장하고 다음 command 체크 진행
      result.push(false);
      continue;
    }
    // flagRulesMap에 적혀있는 대로 option을 적었는지 체크
    for (let j = 0; j < command.length; j++) {
      // 커맨드가 옵션이 아닐경우 false 를 푸쉬하고 현재 for문 종료
      if (flagRulesMap[command[j]] === undefined) {
        result.push(false);
        break;
      }
      // 커맨드가 string이여야 할 경우 체크
      if (flagRulesMap[command[j]] === "STRING") {
        // 만약 string이 아니라면 false를 푸쉬하고 현재 for문 종료
        if (typeChecker(command[j + 1]) !== "string") {
          result.push(false);
          break;
        }
        // string인지 체크를 통과했다면 iteration 한단계 추가로 증가
        j++;
        continue;
      }
      // 커맨드가 strings일 경우 체크
      if (flagRulesMap[command[j]] === "STRINGS") {
        let test = true;
        // command를 순회
        while (j < command.length) {
          // string인 명령어를 제대로 쳤는지 확인
          if (typeChecker(command[j + 1]) !== "string") {
            test = false;
            break;
          }
          // 제대로 쳤다면 그 다음 커맨드도 option이 아닐 경우 확인
          if (command[j + 1][0] === "-") break;
          // 끝에 도달했다면 종료
          if (command[j + 2] === undefined) break;
          j++;
        }
        // test가 false를 바뀌지 않았다면 계속해서 command를 순회
        if (test) {
          continue;
        }
      }

      // 커맨드가 number이여야 할 경우 체크
      if (flagRulesMap[command[j]] === "NUMBER") {
        // 만약 number가 아니라면 false를 푸쉬하고 현재 for문 종료
        if (typeChecker(command[j + 1]) !== "number") {
          result.push(false);
          break;
        }
        // number 체크를 통과했다면 iteration 한단계 추가로 증가
        j++;
        continue;
      }

      // 커맨드가 numbers일 경우 체크
      if (flagRulesMap[command[j]] === "NUMBERS") {
        // if (command[j] === '-a') {
        //   console.log(flagRulesMap[command[j]])
        //   console.log(typeChecker(command[j + 1]))
        // }
        let test = true;
        // command를 순회
        while (j < command.length) {
          // number인 명령어를 제대로 쳤는지 확인
          if (typeChecker(command[j + 1]) !== "number") {
            test = false;
            break;
          }
          // 제대로 쳤다면 그 다음 커맨드도 option이 아닐 경우 확인
          if (command[j + 1][0] === "-") break;
          // 끝에 도달했다면 종료
          if (command[j + 2] === undefined) break;
          j++;
        }
        // test가 false를 바뀌지 않았다면 계속해서 command를 순회
        if (test) {
          continue;
        }
      }

      // 커맨드가 NULL이여야 할 경우 체크
      if (flagRulesMap[command[j]] === "NULL") {
        // 만약 다음 커맨드에 아무것도 없다면 끝에서 사용되었으므로 true를 추가
        if (command[j + 1] === undefined) {
          result.push(true);
          break;
        }
        // 다음 커맨드에 아직 옵션들이 존재한다면 계속 iteration 진행
        // "-" 로 시작하지 않으면 false 를 푸쉬하고 for문 종료
        if (command[j + 1][0] !== "-") {
          result.push(false);
          break;
        }
      }
    }
    // 만약 이번 iteration에서 아무것도 추가되지 않았다면
    // 모든 커맨드가 정상적으로 작동한 것임으로 true 를 result에 추가
    if (result[i] === undefined) {
      result.push(true);
    }
  }

  return result;
}

function typeChecker(str) {
  // 숫자일 경우
  if (str.match(/[0-9]/g)) {
    return "number";
  }
  // 숫자가 아니라면 문자열 반환
  return "string";
}

const result = solution(
  "line",
  ["-s STRING", "-num NUMBER", "-e NULL", "-n ALIAS -num"],
  ["line -n 100 -s hi -e", "line -n 100 -e -num 150"]
);
result; // [true, false]

// const result2 = solution(
//   "bank",
//   ["-send STRING", "-a ALIAS -amount", "-amount NUMBERS"],
//   ["bank -send abc -amount 500 200 -a 400", "bank -send abc -a hey"]
// );

// result2
