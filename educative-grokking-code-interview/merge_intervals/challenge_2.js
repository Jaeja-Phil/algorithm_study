/**
 * We are given a list of Jobs. Each job has a Start time, an End time,
 * and a CPU load when it is running. Our goal is to find the maximum
 * CPU load at any time if all the jobs are running on the same machine.
 */

/**
 * ex1)
 * input: jobs = [[1,4,3], [2,5,4], [7,9,6]]
 * output: 7
 *
 * [1, 4, 3] and [2, 5, 4] overlap, max cpu load (3 + 4) will be
 * when both the jobs are running at the same time during interval 2-4
 *
 * ex2)
 * input: jobs = [[6,7,10], [2,4,11], [8,12,15]]
 * output: 15
 *
 * no overlaps, take maximum load of any job (15)
 *
 * ex3)
 * input: jobs = [[1,4,2], [2,4,1], [3,6,5]]
 * output: 8
 *
 * all jobs overlap during interval 3-4
 */

/**
 * Pseudocode
 *
 * 1. sort the jobs by their start time
 * 2. iterate through jobs, add them to minHeap and add currentCPU load accordingly
 * 3. empty the min heap until current min has a end time greater than
 *    current task's start time.
 *    - subtract the currentCPULoad accordingly
 * 4. meanwhile, keep counting the maxCPULoad
 */
const Heap = require("collections/heap"); //http://www.collectionsjs.com

class Job {
  constructor(start, end, cpuLoad) {
    this.start = start;
    this.end = end;
    this.cpuLoad = cpuLoad;
  }
}

function solution(jobs) {
  // sort the jobs by start time
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0,
    currentCPULoad = 0;
  const minHeap = new Heap([], null, (a, b) => b.end - a.end);

  for (j = 0; j < jobs.length; j++) {
    // remove all the jobs that have ended
    while (minHeap.length > 0 && jobs[j].start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.pop().cpuLoad;
    }
    // add the current job into min_heap
    minHeap.push(jobs[j]);
    currentCPULoad += jobs[j].cpuLoad;
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}

const result = solution([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)]);
console.log(result); // 7
