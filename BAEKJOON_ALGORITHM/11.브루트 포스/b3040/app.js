const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => +item);

let sum = input.reduce((a, b) => a + b);
let fake = sum - 100;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === fake) {
      input.splice(i, 1);
      input.splice(j - 1, 1);
    }
  }
}
console.log(input.join('\n'));
