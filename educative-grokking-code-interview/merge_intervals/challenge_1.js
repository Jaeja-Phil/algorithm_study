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

/**
 * Using Heap to solve this question:
 *
 * 1. sort the arr by starting time
 * 2. schedule meeting in rooms
 * - if meeting 1 (m1) & next meeting (m2) doesnt overlap with the first, schedule it in r1
 * - if m1 & m2 overlaps, schedule it in r2
 *   - if m2 overlaps with m3, check if r1 is free --> need to track the end time of meetings
 *
 * We need to keep track of ending time of all the meetings currently happening
 * - use data structure to give us smallest ending time --> MIN HEAP!
 */

/**
 * Pseudocode w/ min heap approach
 *
 * 1. sort all meetings according to their start time
 * 2. create min heap to store active meetings
 *    - used to find active meeting with smallest END TIME
 * 3. iterate through meetings
 *    - before scheduling, remove all meetings from the heap that ended
 *    - afterwards, add meeting to the heap
 * 4. keep counter to remember the maximum size of the heap
 */

const Heap = require("collections/heap");

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function solution(meetings) {
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0,
    minHeap = new Heap([], null, (a, b) => b.end - a.end);
  for (i = 0; i < meetings.length; i++) {
    // remove all meetings that ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
    }
    minHeap.push(meetings[i]);
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
}

const result1 = solution([
  new Meeting(4, 5),
  new Meeting(2, 3),
  new Meeting(2, 4),
  new Meeting(3, 5)
]);

console.log(result1); // 2
