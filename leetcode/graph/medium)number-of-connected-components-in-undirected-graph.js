/**
 * You have a graph of n nodes. You are given an integer n and
 * an array edges where edges[i] = [ai, bi] indicates that there
 * is an edge between ai and bi in the graph.
 *
 * Return the number of connected components in the graph.
 */

/**
 * ex)
 * input: n = 5, edges = [[0, 1], [1, 2], [3, 4]]
 * output: 2
 *
 * 0 -- 1 -- 2
 *                  3 -- 4
 */

function solution(n, edges) {
  const adj = new Array(n).fill().map(_ => []);
  for (const [from, to] of edges) {
    adj[from].push(to);
    adj[to].push(from);
  }
  const seen = {};
  let numberOfCycles = 0;
  for (let i = 0; i < n; i++) {
    if (!seen[i]) {
      dfs(i);
      numberOfCycles++;
    }
  }

  return numberOfCycles;

  function dfs(currNode) {
    // if current node has been explored
    // end the call with count++
    if (seen[currNode]) {
      return;
    }
    seen[currNode] = true;
    for (let i = 0; i < adj[currNode].length; i++) {
      dfs(adj[currNode][i]);
    }
  }
}

const result = solution(5, [
  [0, 1],
  [1, 2],
  [3, 4]
]);
result; //
