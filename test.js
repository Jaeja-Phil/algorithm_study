function solution(maps) {
  const yLen = maps.length - 1;
  const xLen = maps[0].length - 1;
  const queue = [[0, 0]];
  const visited = {};
  for (let i = 0; i <= yLen; i++) {
    visited[i] = {};
    for (let j = 0; j <= xLen; j++) {
      visited[i][j] = false;
    }
  }
  let result = 0;

  while (queue.length) {
    result++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let point = queue.shift();
      let curY = point[0];
      let curX = point[1];

      if (visited[curY][curX]) continue;

      maps[curY][curX] = 0;
      visited[curY][curX] = true;

      if (curY === yLen && curX === xLen) return result;

      if (curY < yLen && maps[curY + 1][curX] === 1) {
        queue.push([curY + 1, curX]);
      }
      if (curX < xLen && maps[curY][curX + 1] === 1) {
        queue.push([curY, curX + 1]);
      }
      if (curY > 0 && maps[curY - 1][curX] === 1) {
        queue.push([curY - 1, curX]);
      }
      if (curX > 0 && maps[curY][curX - 1] === 1) {
        queue.push([curY, curX - 1]);
      }
    }
  }

  return -1;
}

const result = solution([
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1]
]);
result; // 11
// const result2 = solution([
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1]
// ]);
// result2; // -1
