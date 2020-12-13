/**
 * @description
 * Given a string input representing the file system in the explained format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0
 *
 * example1.
 * I: "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
 * O: 20
 * explanation: "dir/subdir2/file.ext"
 *
 * example2.
 * I: "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
 * O: 32
 * explanation: We have two files:
 * "dir/subdir1/file1.ext" of length 21
 * "dir/subdir2/subsubdir2/file2.ext" of length 32.
 * We return 32 since it is the longest absolute path to a file.
 *
 * @constraints
 * input may contain lowercase or uppercase English letters, a new line character '\n', a tab character '\t', a dot '.', a space ' ', and digits.
 *
 */

let solution = (input) => {
  return;
};
