const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
input = +input;

let movie = 665;

while (input > 0) {
  movie++;

  if (movie.toString().includes('666')) {
    input--;
  }
}
console.log(movie);
