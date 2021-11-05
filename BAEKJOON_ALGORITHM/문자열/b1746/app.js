const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input[0].split(' ').map((item) => +item);
const listen = n[0];

const arr = [];

let cnt = 0;
for (let i = 1; i <= listen; i++) {
  for (let j = listen + 1; j < input.length - 1; j++) {
    if (input[i] === input[j]) {
      cnt++;
      arr.push(input[i]);
    }
  }
}
console.log(cnt);
console.log(arr.sort().join('\n'));
