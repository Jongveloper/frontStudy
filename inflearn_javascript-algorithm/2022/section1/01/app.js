const fs = require('fs');
const filePath = './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

// console.log(Math.min(...input));

let a = input[0];
let b = input[1];
let c = input[2];

function solution(a, b, c) {
  let answer;

  if (a < b) answer = a;
  else answer = b;

  if (answer < c) answer;
  else answer = c;

  return answer;
}

console.log(solution(a, b, c));
