const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

const answer = [];
for (let i = 97; i <= 122; i++) {
  answer.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(' '));
