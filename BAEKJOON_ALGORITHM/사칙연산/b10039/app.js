const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

for (let i = 0; i < input.length; i++) {
  if (input[i] < 40) input[i] = 40;
}
console.log(input.reduce((a, b) => a + b) / input.length);
