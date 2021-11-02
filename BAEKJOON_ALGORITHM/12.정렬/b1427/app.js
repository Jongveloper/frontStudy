const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();
let arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(input[i]);
}
console.log(
  arr
    .sort((a, b) => b - a)
    .join('')
    .trim()
);
