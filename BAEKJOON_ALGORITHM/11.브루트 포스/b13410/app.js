const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const N = +input[0];
const K = +input[1];
let arr = [];

for (let i = 1; i <= K; i++) {
  arr.push((N * i).toString().split('').reverse().join(''));
}
arr.map((item) => +item);

console.log(Math.max(...arr));
