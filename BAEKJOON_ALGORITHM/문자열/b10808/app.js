const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let input = fs.readFileSync(filePath).toString().trim().split('');
let arr = new Array(26).fill(0);

input.forEach((i) => arr[alphabet.indexOf(i)]++);
console.log(arr.join(' '));
