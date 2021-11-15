const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const answer = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    if (input[i].split('').reverse().join('') === input[i]) answer.push('yes');
    else answer.push('no');
  }
}

console.log(answer.join('\n'));
