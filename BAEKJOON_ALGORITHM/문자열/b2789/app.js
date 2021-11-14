const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input.toUpperCase();

let cambridge = 'CAMBRIDGE';
let answer = '';
for (let x of input) {
  if (cambridge.indexOf(x) === -1) answer += x;
}
console.log(answer);
