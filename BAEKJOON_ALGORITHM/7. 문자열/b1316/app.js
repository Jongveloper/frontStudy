const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
let groupWord = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  const char = [];
  let isGroupWord = true;

  for (let j = 0; j < word.length; j++) {
    if (char.indexOf(word[j]) === -1) {
      char.push(word[j]);
    } else {
      if (char.indexOf(word[j]) !== char.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  if (isGroupWord) {
    groupWord += 1;
  }
}

console.log(groupWord);
