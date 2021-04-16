/**
 * Given a list of intervals representing the start and end time of
 * ‘N’ meetings, find the minimum number of rooms required to hold
 * all the meetings.
 */

/**
 * ex1)
 * input: meetings = [[1, 4], [2, 5], [7, 9]]
 * output: 2
 *
 * [1, 4] and [2, 5] overlap, need to hold two rooms
 *
 * ex2)
 * input: meetings = [[6, 7], [2, 4], [8, 12]]
 * output: 1
 *
 * no overlap, need one room to hold all meetings
 */

function solution(meetings) {
  meetings.sort((a, b) => a[0] - b[0]);

  let maxOverlap = 0;

  for (let i = 0; i < meetings.length - 1; i++) {}
}

const result1 = solution([
  [1, 4],
  [2, 5],
  [7, 9]
]);
const result2 = solution([
  [6, 7],
  [2, 4],
  [8, 12]
]);
result1; // 2
result2; // 1
