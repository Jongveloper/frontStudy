const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const arr = [];

for (let i = 0; i < input.length; i++) {
  arr.push(
    input[i]
      .toString()
      .split(' ')
      .map((item) => +item)
  );
  if (arr[i].reduce((a, b) => a + b) === 2) {
    console.log('B');
  }
  if (arr[i].reduce((a, b) => a + b) === 3) {
    console.log('A');
  }
  if (arr[i].reduce((a, b) => a + b) === 1) {
    console.log('C');
  }
  if (arr[i].reduce((a, b) => a + b) === 0) {
    console.log('D');
  }
  if (arr[i].reduce((a, b) => a + b) === 4) {
    console.log('E');
  }
}
