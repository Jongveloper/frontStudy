const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input.shift();
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(n, arr) {
  let answer = arr;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return answer;
}

console.log(solution(n, input));
