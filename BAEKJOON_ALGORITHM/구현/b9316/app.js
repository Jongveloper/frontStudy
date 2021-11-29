const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

for (let i = 1; i <= input; i++) {
  console.log(`Hello World, Judge ${i}!`);
}
