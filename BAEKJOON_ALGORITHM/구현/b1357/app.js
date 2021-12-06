const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let revX = parseInt(input[0].split('').reverse().join(''));
let revY = parseInt(input[1].split('').reverse().join(''));
console.log(parseInt((revX + revY).toString().split('').reverse().join('')));
