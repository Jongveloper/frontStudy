const fs = require('fs');
const filePath = './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

let n = input[0];
let k = input[1];

function solution(n, k) {
  let answer = 0;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(n, k));
