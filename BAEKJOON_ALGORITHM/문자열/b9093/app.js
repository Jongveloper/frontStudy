const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let T = +input.shift();

for (let i = 0; i < T; i++) {
  let answer = [];
  let word = input[i].split(' ').map((item) => item);
  for (let j = 0; j < word.length; j++) {
    answer.push(word[j].split('').reverse().join(''));
  }
  console.log(answer.join(' '));
}
