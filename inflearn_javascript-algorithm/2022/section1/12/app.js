const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(str) {
  return str.toUpperCase();
}

console.log(solution(input));
