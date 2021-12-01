const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split(' ')
  .map((item) => +item);

if (input[0] === input[1]) console.log(1);
else console.log(0);
