const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const day = +input.shift();
const car = input
  .toString()
  .split(' ')
  .map((item) => +item);
let cnt = 0;
for (let i = 0; i < car.length; i++) {
  if (car[i] === day) cnt++;
}
console.log(cnt);
