const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((item) => +item);

let N = input[0];
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i]);
}

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  }
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
