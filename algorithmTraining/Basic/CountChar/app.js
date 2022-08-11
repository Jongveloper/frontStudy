// 특정 글자 수 세기
const str = 'aaaaanm,nmnmnmnmbbkjnkhaajkjkaaa';

const target = 'a'

function solution(string, target) {
  const stringToArray = string.split('');

  const answer =  stringToArray.filter((i) => i === target).length


  return answer;
}

console.log(solution(str, target))