const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let score = input[1].split(' ').map((item) => +item);
let highScore = Math.max.apply(null, score);
let num = +input[0];
let avg = 0;
let sum = 0;
for (let i = 0; i < num; i++) {
  sum += (score[i] / highScore) * 100;
  avg = sum / num;
}
console.log(avg);
