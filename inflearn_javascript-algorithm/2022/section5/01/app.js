const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let aLength = +input.shift();

let aArray = input
  .shift()
  .split(' ')
  .map((item) => +item);

let bLength = +input.shift();

let bArray = input
  .shift()
  .split(' ')
  .map((item) => +item);

function solution(a, b) {
  let answer = [];
  // answer = a.concat(b).sort((a, b) => a - b);
  let n = aLength;
  let m = bLength;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (a[p1] < b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }
  while (p1 < n) answer.push(a[p1++]);
  while (p2 < m) answer.push(b[p2++]);

  return answer;
}

console.log(solution(aArray, bArray));
