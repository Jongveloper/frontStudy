const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const A = +input[0];
const B = +input[1];
const C = +input[2];

function solution(a, b, c) {
  let answer = 'YES',
    max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (sum - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(A, B, C));
