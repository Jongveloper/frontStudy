const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

let result = a + b;
console.log(result.toString());
