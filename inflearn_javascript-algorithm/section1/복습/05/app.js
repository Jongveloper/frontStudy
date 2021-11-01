const fs = require('fs');
let input = fs
  .readFileSync('./input.txt')
  .toString()
  .split(' ')
  .map((item) => +item);

console.log(Math.min(...input));
