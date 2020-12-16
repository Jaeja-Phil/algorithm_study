const solution = (A, B) => {
  const rowLength = A.length;
  const hash = {};
  for (let i = 1; i <= 6; i++) {
    hash[i] = 0;
  }

  for (let i = 0; i < rowLength; i++) {
    if (A[i] === B[i]) {
      hash[A[i]] += 1;
      if (hash[A[i]] !== i + 1) {
        return -1;
      }
    } else {
      hash[A[i]] += 1;
      hash[B[i]] += 1;
      if (!(hash[A[i]] === i + 1 || hash[B[i]] === i + 1)) {
        return -1;
      }
    }
  }

  const max = Math.max(...Object.values(hash));
  if (max !== rowLength) {
    return -1;
  }

  let num = 0;
  for (let i = 1; i <= 6; i++) {
    if (hash[i] === max) {
      num = i;
    }
  }

  let swapA = 0;
  let swapB = 0;
  for (let i = 0; i < rowLength; i++) {
    if (A[i] !== num) {
      swapA++;
    }
    if (B[i] !== num) {
      swapB++;
    }
  }

  return Math.min(swapA, swapB);
};
