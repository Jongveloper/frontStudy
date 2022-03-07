const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let student = +input.shift();

function solution(str) {
  let answer = '';
  let sH = new Map();
  for (let x of str) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, value] of sH) {
    if (value > max) {
      max = value;
      answer = key;
    }
  }
  return answer;
}

console.log(solution(input.toString()));
