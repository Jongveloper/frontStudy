const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const j = input[0];
const doctor = input[1];

console.log(j.length >= doctor.length ? 'go' : 'no');
