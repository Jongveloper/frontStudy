const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

console.log(Math.ceil(input / 12));
