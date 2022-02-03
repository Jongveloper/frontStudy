const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

for (let i = 0; i < T; i++) {
  let str = input[i].split('').reverse().join('');
  let sum = Number(str) + Number(input[i]);
  let reverseSum = sum.toString().split('').reverse().join('');
  console.log(reverseSum == sum ? 'YES' : 'NO');
}
