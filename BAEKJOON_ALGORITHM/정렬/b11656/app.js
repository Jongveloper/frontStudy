const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
const answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push(input.slice(i));
}
console.log(answer.sort().join('\n'));
