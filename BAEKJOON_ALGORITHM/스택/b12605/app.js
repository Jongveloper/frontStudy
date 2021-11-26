const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = +input.shift();
for (let i = 0; i < n; i++) {
  let text = input[i].split(' ').map((item) => item);
  let stack = [];
  let answer = [];
  for (let j = 0; j < text.length; j++) {
    stack.push(text[j]);
  }
  while (stack.length > 0) {
    answer.push(stack.pop());
  }
  console.log(`Case #${i + 1}: ${answer.join(' ')}`);
}
