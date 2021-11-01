const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map((item) => +item);

// function solution(n) {
//   let answer = [];
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] % 2 !== 0) {
//       answer.push(n[i]);
//     }
//   }
//   console.log(answer.reduce((a, b) => a + b));
//   console.log(Math.min(...answer));
// }

// solution(input);

function solution(n) {
  let answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for (let x of n) {
    if (x % 2 !== 0) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
console.log(solution(input).join('\n'));
