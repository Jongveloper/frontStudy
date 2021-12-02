const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();
for (let i = 0; i < T; i++) {
  let answer = input[i]
    .trim()
    .split(' ')
    .map((item) => +item)
    .sort((a, b) => b - a);
  console.log(answer[2]);
}
