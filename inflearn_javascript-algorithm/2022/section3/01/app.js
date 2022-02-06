const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString().toUpperCase();

function solution(str) {
  let answer = 'YES';
  // let reverseStr = str.split('').reverse().join('');
  // if (str === reverseStr) return answer;
  // else answer = 'NO';
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - i - 1]) return 'NO';
  }
  return answer;
}

console.log(solution(input));
