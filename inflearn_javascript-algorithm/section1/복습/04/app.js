const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();

solution(+input);

function solution(n) {
  let answer = n;
  for (let i = 0; i < n; i++) {
    answer = answer + i;
  }
  console.log(answer);
}
