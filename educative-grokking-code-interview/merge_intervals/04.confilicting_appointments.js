/**
 * Given an array of intervals representing ‘N’ appointments,
 * find out if a person can attend all the appointments.
 */

/**
 * ex1)
 * input: arr = [[1,4], [2,5], [7,9]]
 * output: false
 *
 * [1, 4] and [2, 5] overlap, a person cant attend both of these appointments
 *
 * ex2)
 * input: arr = [[6,7], [2,4], [8,12]]
 * output: true
 *
 * none of these appointments overlap
 */

function solution(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      // while merging needs <= operator, we need to check if they can avoid
      // all overlapping appointments, thus needing < operator

      // when sorted array EVER has a case where the start time of later appointment
      // is earlier than previous appointment, return false
      return false;
    }
  }
  // if all pass, return true cause there is no overlap!
  return true;
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
result1; // false
result2; // true
