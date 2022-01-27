const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input.shift();

function solution(arr) {
  let answer = '';
  for (let i = 0; i < N; i++) {
    if (arr[i].length > answer.length) answer = arr[i];
  }
  return answer;
}

console.log(solution(input));
