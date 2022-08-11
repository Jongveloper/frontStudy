// 배열의 누적 합 구하기
const numbers = [2, 2];

function solution(arr) {
  return arr.reduce((a,b) => a + b);
}


console.log(solution(numbers))
