/**
 * There are a total of n courses you have to take labelled from 0 to n - 1.
 * Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi]
 * this means you must take the course bi before the course ai.
 *
 * Given the total number of courses numCourses and a list of the prerequisite pairs,
 * return the ordering of courses you should take to finish all courses.
 *
 * If there are many valid answers, return any of them. If it is impossible to finish
 * all courses, return an empty array.
 */

/**
 * ex)
 * input: numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]
 * output: [0, 2, 1, 3]
 * total 4 courses to take
 * to take course 3, you should finish 2 or 1
 * to take course 2 or 1, you should finish 0
 * [0 1 2 3] or [0 2 1 3] should let you finish all courses
 */

function solution(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const result = [];
  const adj = new Array(numCourses).fill().map(_ => []);

  for (const [to, from] of prerequisites) {
    adj[from].push(to);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return [];
    }
  }

  return result.reverse();

  function dfs(currNode) {
    if (seen.has(currNode)) return true;
    if (seeing.has(currNode)) return false;
    seeing.add(currNode);

    for (let i = 0; i < adj[currNode].length; i++) {
      if (!dfs(adj[currNode][i])) {
        return false;
      }
    }

    seeing.delete(currNode);
    seen.add(currNode);
    result.push(currNode);
    return true;
  }
}

const result = solution(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2]
]);
result; // [0, 2, 1, 3] or [0, 1, 2, 3]
