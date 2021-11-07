const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
let answer = 0;
for (let i = 0; i < input.length; i++) {
  answer += input[i] * input[i];
}
console.log(answer % 10);
