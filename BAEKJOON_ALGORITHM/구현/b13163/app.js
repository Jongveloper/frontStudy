const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input.shift();

for (let i = 0; i < N; i++) {
  let arr = input[i].toString().split(' ');
  arr[0] = 'god';
  console.log(arr.join(''));
}
