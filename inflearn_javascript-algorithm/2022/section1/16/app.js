const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

// Set
// function solution(s) {
//   const setInput = new Set(s);
//   let answer = [...new Set(setInput)].join('');
//   return answer;
// }

// indexof
function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (i === s.indexOf(s[i])) answer += s[i];
  }
  return answer;
}

console.log(solution(input));
