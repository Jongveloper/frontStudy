const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);
input.sort((a, b) => a - b);
for (let i = 1; i <= 30; i++) {
  if (input.indexOf(i) === -1) {
    console.log(i);
  }
}
