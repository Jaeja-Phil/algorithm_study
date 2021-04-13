/**
 * Given a list of non-overlapping intervals sorted by their start time,
 * insert a given interval at the correct position and merge all necessary
 * intervals to produce a list that has only mutually exclusive intervals.
 */

/**
 * ex1)
 * input: intervals = [[1,3], [5,7], [8,12]], new interval = [4, 6]
 * output: [[1,3], [4,7], [8,12]]
 *
 * after insertion, [4, 6] overlaps with [5, 7] so merge it to [4, 7]
 *
 * ex2)
 * input: intervals = [[1,3], [5,7], [8,12]], new interval= [4, 10]
 * output: [[1, 3], [4, 12]]
 *
 * after insertion, [4, 10] overlaps with [5, 7] and [8, 12]
 * merge it to [4, 12]
 */

function solution(intervals, newInterval) {
  let merged = [],
    i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    merged.push(intervals[i]);
    i += 1;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i += 1;
  }

  merged.push(newInterval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }

  return merged;
}

const result = solution(
  [
    [1, 3],
    [5, 7],
    [8, 12]
  ],
  [4, 10]
);
result; // [4, 12]
