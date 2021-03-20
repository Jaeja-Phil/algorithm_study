const exampleFibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let fibonacciWRecursive = n => {
  if (n <= 1) return n;
  return fibonacciWRecursive(n - 1) + fibonacciWRecursive(n - 2);
};

const result1 = fibonacciWRecursive(10);
result1;

let fibonacciWIterative = n => {
  if (n <= 1) return n;

  let n1 = 1;
  let n2 = 0;
  let res = 0;

  let i = 2;
  while (i <= n) {
    res = n1 + n2;
    n2 = n1;
    n1 = res;
    i++;
  }

  return res;
};

const result2 = fibonacciWIterative(10);
result2;
