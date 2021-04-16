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
