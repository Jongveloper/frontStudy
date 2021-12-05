const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(a, b) {
  if (a > b) return 'Yes';
  else return 'No';
}

for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(' ').map((item) => +item);
  if (arr[0] !== 0 && arr[1] !== 0) console.log(solution(arr[0], arr[1]));
}
