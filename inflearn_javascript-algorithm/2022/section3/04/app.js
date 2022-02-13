const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let s = input[0].trim();
let t = input[1];

function solution(s, t) {
  let cnt = 1000;
  let answer = [];
  for (let x of s) {
    if (x === t) {
      cnt = 0;
      answer.push(cnt);
    } else {
      cnt++;
      answer.push(cnt);
    }
  }
  cnt = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      cnt = 0;
      answer[i] = 0;
    } else {
      cnt++;
      answer[i] = Math.min(answer[i], cnt);
    }
  }
  return answer;
}

console.log(solution(s, t));
