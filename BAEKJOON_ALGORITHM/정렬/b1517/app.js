const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift();
let arr = input
  .toString()
  .split(' ')
  .map((item) => +item);

let answer = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      answer++;
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(answer);
