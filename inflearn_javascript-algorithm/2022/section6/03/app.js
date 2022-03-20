let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let b = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(arr, move) {
  let answer = 0;
  let stack = [];

  move.forEach((pos) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][pos - 1] !== 0) {
        let tmp = arr[i][pos - 1];
        arr[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });

  return answer;
}

console.log(solution(a, b));
