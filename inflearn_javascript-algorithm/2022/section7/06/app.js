const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(n, arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (sortArr[i] !== arr[i]) answer.push(i + 1);
  }
  return answer;
}

console.log(solution(n, input));
