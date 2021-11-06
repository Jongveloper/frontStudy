const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let n = input.shift();
let answer = '';

for (let x of input) {
  if (x === 'anj') answer += '뭐야;';
}

console.log(answer === '' ? '뭐야?' : '뭐야;');
