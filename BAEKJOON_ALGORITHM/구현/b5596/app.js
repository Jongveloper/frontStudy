const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let s = input[0]
  .toString()
  .split(' ')
  .map((item) => +item)
  .reduce((a, b) => a + b);
let t = input[1]
  .toString()
  .split(' ')
  .map((item) => +item)
  .reduce((a, b) => a + b);

if (s > t) console.log(s);
else if (s < t) console.log(t);
else console.log(s);
