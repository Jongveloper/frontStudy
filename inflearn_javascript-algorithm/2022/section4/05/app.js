const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let input2 = input.shift().split(' ');
let k = +input2[1];
let card = +input2[0];
input = input
  .toString()
  .split(' ')
  .map((item) => +item);

function solution(n, k, card) {
  let answer = 0;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

console.log(solution(card, k, input));
