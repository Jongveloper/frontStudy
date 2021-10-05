const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

input = Number(input);

let star = new Array(input).fill(' ');

for (let i = input - 1; i >= 0; i--) {
  star[i] = '*';
  console.log(star.join(''));
}
