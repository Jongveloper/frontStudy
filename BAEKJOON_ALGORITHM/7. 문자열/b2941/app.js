const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
  for (let char of croatia) {
    input = input.split(char).join('Q');
  }
  return input.length;
}

console.log(solution(input));
