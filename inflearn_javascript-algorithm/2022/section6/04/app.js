const fs = require('fs');
const filePath = './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(arr) {
  let answer = 0;
  let stack = [];
  for (let x of arr) {
    if (!isNaN(x)) stack.push(parseInt(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

console.log(solution(input));
