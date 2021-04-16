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
