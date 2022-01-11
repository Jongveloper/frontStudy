const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let N = +input[0];
let K = +input[1];

let answer = [];

// 1부터 N까지의 숫자를 배열화
const arr = Array.from({ length: N }, (v, i) => i + 1);

for (let i = 0; i < N; i++) {
  for (let j = 1; j <= K; j++) {
    if (j === K) {
      answer.push(arr.shift());
    } else {
      arr.push(arr.shift());
    }
  }
}

console.log('<' + answer.join(', ') + '>');
