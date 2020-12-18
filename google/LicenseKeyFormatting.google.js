const solution = (S, K) => {
  S = S.split("-").join("").split("");
  for (let i = S.length - K - 1; i >= 0; i -= K) {
    S[i] += "-";
  }
  return S.join("").toUpperCase();
};

const result = solution("5F3Z-2e-9-w", 4);
result;
