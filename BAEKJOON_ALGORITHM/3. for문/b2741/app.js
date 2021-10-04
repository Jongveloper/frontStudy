const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');
input = Number(input);
let value = '';

for (let i = 1; i <= input; i++) {
  value += i + '\n';
}

console.log(value);
