const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = input.shift();
let arr = input.map((item) => item.split(' ').map((item2) => +item2));
let answer = '';
arr
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  .forEach((item) => {
    answer += `${item[0]} ${item[1]}\n`;
  });

console.log(answer.trim());
