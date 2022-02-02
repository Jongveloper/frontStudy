const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input[0];
let t = input[1].toString().split(' ');

function solution(n, t) {
  let answer = 0;
  let score = 0;
  for (let i = 0; i < n; i++) {
    if (t[i] == 0) {
      score = 0;
    } else {
      score++;
      answer += score;
    }
  }
  return answer;
}

console.log(solution(N, t));
