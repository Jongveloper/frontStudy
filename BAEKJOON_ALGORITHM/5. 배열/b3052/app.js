const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

const numArray = [];

input.forEach((x) => {
  const num = x % 42;

  if (numArray.indexOf(num) === -1) {
    numArray.push(num);
  }
});

console.log(numArray.length);
