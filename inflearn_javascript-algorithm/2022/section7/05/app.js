const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = input.shift();
let size = +n[0];
let cache = +n[2];

input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(size, cache, arr) {
  let answer = Array(size).fill(0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

console.log(solution(size, cache, input));
