/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the
 * non-overlapping intervals that cover all the intervals in the input.
 */

/**
 * ex)
 * input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
 * output: [[1, 6], [8, 10], [15, 18]]
 *
 * intervals [1, 3] and [2, 6] overlap, merge into [2, 6]
 */

function solution(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  const result = [prev];
  for (const interval of intervals) {
    // if current interval's start time is lower than
    // previous interval's end time
    if (interval[0] <= prev[1]) {
      // update the previous interval's end time to whatever is bigger
      prev[1] = Math.max(prev[1], interval[1]);
    } else {
      result.push(interval);
      prev = interval;
    }
  }
  return result;
}

const result = solution([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
]);
result; // [[1, 6], [8, 10], [15, 18]]
