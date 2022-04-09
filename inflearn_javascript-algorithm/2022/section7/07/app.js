let input = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

let n = 5;

function solution(n, arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return answer;
}

console.log(solution(n, input));
