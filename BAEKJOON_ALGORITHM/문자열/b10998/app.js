const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

console.log(input.join('') === input.reverse().join('') ? 1 : 0);
