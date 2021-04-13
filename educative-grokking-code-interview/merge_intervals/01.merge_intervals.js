/**
 * Given a list of intervals, merge all the overlapping intervals to
 * produce a list that has only mutually exclusive intervals.
 */

/**
 * ex1)
 * input: arr = [[1,4], [2,5], [7,9]]
 * output: [[1, 5], [7, 9]]
 *
 * first two intervals overlap ([1, 4], [2, 5])
 * merge them into [1, 5]
 *
 * ex2)
 * input: arr = [[6, 7], [2, 4], [5, 9]]
 * output: [[2, 4], [5, 9]]
 *
 * first and last intervals overlap
 * merge them into [5, 9]
 */

function solution(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];

  let start = intervals[0][0],
    end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] <= end) {
      end = Math.max(interval[1], end);
    } else {
      mergedIntervals.push([start, end]);
      start = interval[0];
      end = interval[1];
    }
  }

  mergedIntervals.push([start, end]);
  return mergedIntervals;
}

const result = solution([
  [1, 4],
  [2, 5],
  [7, 9]
]);
result; // [[1, 5], [7, 9]]
