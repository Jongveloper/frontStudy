const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const [a, b] = input.map((v) => [...v].reverse().join(''));

console.log(Math.max(a, b));
