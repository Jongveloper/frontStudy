const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((item) => BigInt(item));

const [n, m] = input;

let answer = '' + n / m + '\n';
answer += n % m;
console.log(answer);
