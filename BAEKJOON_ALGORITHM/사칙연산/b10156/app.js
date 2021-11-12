const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((item) => +item);

const snack = input[0];
const count = input[1];
const money = input[2];

console.log(snack * count - money < 0 ? 0 : snack * count - money);
