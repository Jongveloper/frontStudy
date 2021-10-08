const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let testCase = input[1].split(' ').map((item) => +item);

solution(+input[0], testCase);

function solution(N, arrayN) {
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < N; i++) {
    if (arrayN[i] > max) {
      max = arrayN[i];
    }
    if (arrayN[i] < min) {
      min = arrayN[i];
    }
  }
  console.log(`${min} ${max}`);
}
