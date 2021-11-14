const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let a = input[0];
let b = input[1];
let answer = 0;
for (let i = 0; i < a.length; i++) {
  let multi = 0;
  for (let j = 0; j < b.length; j++) {
    multi = a[i] * b[j];
    answer += multi;
  }
}
console.log(answer);
