const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

let sum = input.reduce((a, b) => a + b);

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (sum - (input[i] + input[j]) === 100) {
      input.splice(j, 1);
      input.splice(i, 1);
    }
  }
}
console.log(input.sort((a, b) => a - b).join('\n'));
