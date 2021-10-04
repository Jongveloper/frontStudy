const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
let answer = '';
input = Number(input);

for (let i = input; i > 0; i--) {
  answer += i + '\n';
}

console.log(answer);
