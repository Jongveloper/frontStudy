const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let N = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item);
function solution(N, std) {
  let answer = [];
  for (let i = 0; i < N; i++) {
    let grade = 1;
    for (let j = 0; j < N; j++) {
      if (std[i] < std[j]) grade++;
    }
    answer.push(grade);
  }
  return answer.join(' ');
}
console.log(solution(N, input));
