const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let a = input[0];
let b = input[1];

function solution(a, b) {
  let answer = 0;
  let target = b.length;
  let sH = new Map();

  for (let x of b) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (let i = 0; i < a.length; i++) {
    let aTarget = a.substring(i, target);
    for (let x of aTarget) {
      if (!sH.has(x)) answer++;
    }
    target++;
  }
  return answer;
}

console.log(solution(a, b));
