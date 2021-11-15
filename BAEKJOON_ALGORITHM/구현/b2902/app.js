const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let answer = '';
for (let x of input) {
  if (x.charCodeAt() > 45 && x.charCodeAt() < 91) answer += x;
}
console.log(answer);
