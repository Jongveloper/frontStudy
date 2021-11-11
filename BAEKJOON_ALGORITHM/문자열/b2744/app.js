const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let answer = '';

for (let i = 0; i < input.length; i++) {
  if (input[i].charCodeAt() < 97) {
    answer += String.fromCharCode(input[i].charCodeAt() + 32);
  } else answer += String.fromCharCode(input[i].charCodeAt() - 32);
}
console.log(answer);
