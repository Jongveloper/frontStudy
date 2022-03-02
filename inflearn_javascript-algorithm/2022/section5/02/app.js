const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let aLength = +input.shift();
let A = input
  .shift()
  .split(' ')
  .map((item) => +item);

let bLength = +input.shift();
let B = input
  .shift()
  .split(' ')
  .map((item) => +item);

function solution(a, b, n, m) {
  let answer = [];
  let p1 = (p2 = 0);
  a = a.sort((a, b) => a - b);
  b = b.sort((a, b) => a - b);

  while (p1 < n && p2 < m) {
    if (a[p1] === b[p2]) {
      answer.push(a[p1++]);
      p2++;
    } else if (a[p1] < b[p2]) p1++;
    else p2++;
  }

  // for (let i = 0; i < n; i++) {
  //   for (let j = 0; j < m; j++) {
  //     if (a[i] === b[j]) answer.push(a[i]);
  //   }
  //   answer.sort((a, b) => a - b);
  // }

  return answer;
}

console.log(solution(A, B, aLength, bLength));
