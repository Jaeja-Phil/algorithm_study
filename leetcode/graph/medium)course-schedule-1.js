/**
 * There are a total of numCourses courses you have to take, labeled from
 * 0 to numCourses - 1. You are given an array prerequisites where
 * prerequisites[i] = [ai, bi] indicates that you must take course bi
 * first if you want to take course ai.
 *
 * [0, 1] pair indicates to take course 0, you need to take course 1
 *
 * return true if you can finish all courses, otherwise false
 */

/**
 * ex)
 * input: numCourses = 2, prerequisites = [[1, 0]]
 * output: true
 */

function solution(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const adj = [...Array(numCourses)].map(_ => []);

  for (const [to, from] of prerequisites) {
    adj[from].push(to);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) {
      return false;
    }
  }
  return true;

  function dfs(courseIdx) {
    // current course has already been taken in previous path
    if (seen.has(courseIdx)) return true;
    // means that current path has a cycle
    if (seeing.has(courseIdx)) return false;

    seeing.add(courseIdx);
    for (let i = 0; i < adj[courseIdx].length; i++) {
      // if any of the recursive call returns false
      // meaning that current 'seeing' already had this, thus having a cycle
      // return false
      if (!dfs(adj[courseIdx][i])) {
        return false;
      }
    }
    seeing.delete(courseIdx);
    seen.add(courseIdx);
    return true;
  }
}

const result = solution(2, [[1, 0]]);
result;
