/**
 * Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1,
 * find all possible paths from node 0 to node n - 1, and return them in any order.
 *
 * The graph is given as follows: graph[i] is a list of all nodes you can visit
 * from node i (i.e., there is a directed edge from node i to node graph[i][j]).
 */

/**
 * ex)
 * input: graph = [[1, 2], [3], [3], []]
 * output: [[0, 1, 3], [0, 2, 3]]
 *
 *    0  -->  1
 *    |       |
 *    v       v
 *    2  -->  3
 */

function solution(graph) {
  const results = [];
  const findPath = (current, node) => {
    if (node == graph.length - 1) {
      results.push(current.slice());
      return;
    }
    for (let i = 0; i < graph[node].length; i++) {
      current.push(graph[node][i]);
      findPath(current, graph[node][i]);
      current.pop();
    }
  };
  findPath([0], 0);
  return results;
}

const result = solution([[1, 2], [3], [3], []]);
result; // [[0, 1, 3], [0, 2, 3]]
