const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const t = +input[0];
const arr = [];
const arr2 = [];
for (let i = 1; i <= t; i++) {
  arr.push(input[i]);
}

for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i].split(','));
  console.log(parseInt(arr2[i][0]) + parseInt(arr2[i][1]));
}
