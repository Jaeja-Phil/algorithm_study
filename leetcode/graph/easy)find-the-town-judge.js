/**
 * In a town, there are N people labelled from 1 to N.  There is a rumor that
 * one of these people is secretly the town judge.
 *
 * If the town judge exists, then:
 * - The town judge trusts nobody.
 * - Everybody (except for the town judge) trusts the town judge.
 * - There is exactly one person that satisfies properties 1 and 2.
 *
 * You are given trust, an array of pairs trust[i] = [a, b] representing
 * that the person labelled "a" trusts the person labelled "b".
 *
 * If the town judge exists and can be identified, return the label
 * of the town judge.  Otherwise, return -1.
 */

function solution(n, trust) {
  const trusterArr = Array(n).fill(0);
  const trusteeArr = Array(n).fill(0);

  for (let i = 0; i < trust.length; i++) {
    let [truster, trustee] = trust[i];
    truster--;
    trustee--;

    trusterArr[truster]++;
    trusteeArr[trustee]++;
  }

  for (let i = 0; i < n; i++) {
    if (trusterArr[i] === 0 && trusteeArr[i] === n - 1) {
      return i + 1;
    }
  }

  return -1;
}

// const result = solution(2, [[1, 2]]);
// result; // 2
const result2 = solution(3, [
  [1, 3],
  [2, 3]
]);
result2; // 3
