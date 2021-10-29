const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let inputs = fs.readFileSync(filePath).toString().split('\n');
inputs.pop();

for (let i = 0; i < inputs.length; i++) {
  let input = +inputs[i];

  let inputM = input * 2;
  let primeArray = Array(inputM + 1).fill(true);
  primeArray[0] = primeArray[1] = false;

  function primeNumber() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(inputM)); i++) {
      if (primeArray[i]) {
        let m = 2;
        while (i * m <= inputM) {
          primeArray[i * m] = false;
          m++;
        }
      }
    }
    let answer = [];

    for (let i = input + 1; i <= inputM; i++) {
      if (primeArray[i]) {
        answer.push(i);
      }
    }
    console.log(answer.length);
  }
  primeNumber();
}
