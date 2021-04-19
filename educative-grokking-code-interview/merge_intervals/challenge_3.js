/**
 * For ‘K’ employees, we are given a list of intervals representing
 * the working hours of each employee. Our goal is to find out if there
 * is a free interval that is common to all employees.
 *
 * You can assume that each list of employee working hours is
 * sorted on the start time.
 */

/**
 * ex1)
 * input: hours = [[[1,3], [5,6]], [[2,3], [6,8]]]
 * output: [3, 5]
 *
 * both employees are free between 3-5
 *
 * ex2)
 * input: hours = [[[1,3], [9,12]], [[2,4]], [[6,8]]]
 * output: [4,6], [8,9]
 *
 * all employees are free between [4,6] and [8,9]
 */

const Heap = require("collections/heap"); //http://www.collectionsjs.com

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

class EmployeeInterval {
  constructor(interval, employeeIndex, intervalIndex) {
    this.interval = interval; // interval representing employee's working hours
    // index of the list containing working hours of this employee
    this.employeeIndex = employeeIndex;
    this.intervalIndex = intervalIndex; // index of the interval in the employee list
  }
}

function solution(schedule) {
  let n = schedule.length,
    result = [];
  if (schedule === null || n === 0) {
    return result;
  }
  const minHeap = new Heap(
    [],
    null,
    (a, b) => b.interval.start - a.interval.start
  );
  // insert the first interval of each employee to the queue
  for (i = 0; i < n; i++) {
    minHeap.push(new EmployeeInterval(schedule[i][0], i, 0));
  }
  let previousInterval = minHeap.peek().interval;
  while (minHeap.length > 0) {
    const queueTop = minHeap.pop();
    // if previousInterval is not overlapping with the next interval, insert a free interval
    if (previousInterval.end < queueTop.interval.start) {
      result.push(new Interval(previousInterval.end, queueTop.interval.start));
      previousInterval = queueTop.interval;
    } else {
      // overlapping intervals, update the previousInterval if needed
      if (previousInterval.end < queueTop.interval.end) {
        previousInterval = queueTop.interval;
      }
    }
    // if there are more intervals available for(the same employee, add their next interval
    const employeeSchedule = schedule[queueTop.employeeIndex];
    if (employeeSchedule.length > queueTop.intervalIndex + 1) {
      minHeap.push(
        new EmployeeInterval(
          employeeSchedule[queueTop.intervalIndex + 1],
          queueTop.employeeIndex,
          queueTop.intervalIndex + 1
        )
      );
    }
  }
  return result;
}

const result = solution([
  [new Interval(1, 3), new Interval(5, 6)],
  [new Interval(2, 3), new Interval(6, 8)]
]);
console.log(result); // [3, 5]
