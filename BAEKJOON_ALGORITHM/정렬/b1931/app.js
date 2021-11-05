const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input.shift();
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[i].split(' ').map((item) => +item));
}

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let et = 0;
let answer = 0;
for (let x of arr) {
  if (x[0] >= et) {
    answer++;
    et = x[1];
  }
}
console.log(answer);
