const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let t = Number(input[0]);
let sum = '';

for (let i = 1; i <= t; i++) {
  let num = input[i].split(' ');
  sum += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(sum);
