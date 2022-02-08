const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();
input = input.toUpperCase().replace(/[^0-9]/g, '');

function solution(s) {
  let answer = parseInt(s);
  return answer;
}

console.log(solution(input));
