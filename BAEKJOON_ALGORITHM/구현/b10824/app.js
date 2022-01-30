const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let AB = input[0] + input[1];
let CD = input[2] + input[3];

console.log(parseInt(AB) + parseInt(CD));
