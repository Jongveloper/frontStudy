const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let arr = [];
let arr2 = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] !== 'END') arr.push(input[i]);
}

for (let i = 0; i < arr.length; i++) {
  arr2.push(arr[i].split('').reverse());
  console.log(arr2[i].join(''));
}
