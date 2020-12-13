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
  let stack = [];

  return input.split("\n").reduce((max, p) => {
    let level = p.lastIndexOf("\t") + 1;
    stack[level] = p.length - level + (level ? stack[level - 1] : 0);
    return p.indexOf(".") === -1 ? max : Math.max(max, stack[level] + level);
  }, 0);
};

let result = solution(
  "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
);

let solution2 = (input) => {
  let maxLength = 0;
  let pathLength = { 0: 0 };
  let lines = input.split("\n");

  for (let i = 0; i < lines.length; i++) {
    let name = lines[i].replace(/\t/g, "");
    let depth = lines[i].length - name.length;

    if (name.includes(".")) {
      maxLength = Math.max(maxLength, pathLength[depth] + name.length);
    } else {
      pathLength[depth + 1] = pathLength[depth] + name.length + 1;
    }
  }

  return maxLength;
};

let result2 = solution2(
  "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
);
