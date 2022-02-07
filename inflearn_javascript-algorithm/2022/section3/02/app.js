const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(str) {
  let answer = 'YES';
  str = str.toUpperCase().replace(/[^A-Z]/g, '');
  // let len = str.length;
  // for (let i = 0; i < Math.floor(len / 2); i++) {
  //   if (65 <= str[i].charCodeAt() && str[i].charCodeAt() <= 90) {
  //     if (str[i] !== str[len - i - 1]) answer = 'NO';
  //   }
  // }
  if (str.split('').reverse().join('') !== str) answer = 'NO';
  return answer;
}

console.log(solution(input));
