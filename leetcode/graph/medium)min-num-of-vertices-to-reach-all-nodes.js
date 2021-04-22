/**
 * Given a directed acyclic graph, with n vertices numbered from 0 to n-1,
 * and an array edges where edges[i] = [fromi, toi] represents a directed
 * edge from node fromi to node toi.
 *
 * Find the smallest set of vertices from which all nodes in the graph are
 * reachable. It's guaranteed that a unique solution exists.
 */

/**
 * ex)
 * input: n = 6, edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]
 * output: [0, 3]
 *    /------> 1
 *    |
 *    0 ------> 2 ------> 5
 *              ^
 *              |
 *    3 ------> 4
 * from 0, [0, 1, 2, 5] is reachable
 * from 3, [3, 4, 2, 5] is reachable
 * thus, output: [0, 3]
 */

function solution(n, edges) {
  const map = new Array(n).fill(0);
  const answer = [];

  for (let [from, to] of edges) {
    map[to]++;
  }

  for (let i = 0; i < n; i++) {
    if (map[i] === 0) {
      answer.push(i);
    }
  }

  return answer;
}

const result = solution(6, [
  [0, 1],
  [0, 2],
  [2, 5],
  [3, 4],
  [4, 2]
]);
result; // [0, 3]
