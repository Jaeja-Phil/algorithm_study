// function solution(enter, leave) {
//   // 먼저 들어간 사람이 나중에 들어간 사람보다 먼저 나왔을 경우 확실하게 본 경우다.
//   const result = new Array(enter.length).fill(0);

//   for (let i = 0; i < enter.length - 1; i++) {
//     const currentPersonLeftIndex = leave.findIndex(v => v === enter[i]);
//     for (let j = i + 1; j < enter.length; j++) {
//       const nextPersonLeftIndex = leave.findIndex(v => v === enter[j]);
//       if (currentPersonLeftIndex > nextPersonLeftIndex) {
//         result[enter[i] - 1] += 1;
//         result[enter[j] - 1] += 1;
//       }
//     }
//   }

//   const lastPersonLeftIndex = leave.findIndex(
//     v => v === enter[enter.length - 1]
//   );
//   leave.slice(lastPersonLeftIndex + 1).forEach(person => {
//     result[person - 1] += 1;
//     // result[]
//     console.log(enter[enter.length - 1]);
//   });
//   console.log(leave.slice(lastPersonLeftIndex + 1));

//   return result;
// }

const result1 = solution([1, 4, 2, 3], [2, 1, 3, 4]);
result1; // [2,2,1,3]

// // const result2 = solution([1,3,2],	[1,2,3])
// // result2 // [0, 1, 1]

function solution(enter, leave) {
  const inTheRoom = [];
  inTheRoom.push(enter.shift());

  while (enter.length !== 0 && leave.length !== 0) {}
}
