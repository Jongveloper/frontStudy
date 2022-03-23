const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input
  .shift()
  .split(' ')
  .map((item) => +item);

function solution(people) {
  let answer = [];
  let sH = new Map();
  for (let x of people) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let [key, val] of sH) {
    if (val > 1) answer.push(key);
  }
  answer.unshift(answer.length);
  return answer.join('\n');
}

console.log(solution(input));
