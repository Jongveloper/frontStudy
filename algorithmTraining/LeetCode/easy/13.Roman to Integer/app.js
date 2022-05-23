const str = 'MCMXCIV';

const romanToInt = function (s) {
  let answer = 0;
  const value = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let current = value[s[i]]; // 현재 값 ex ) s[0] = value(M) = 1000
    let next = value[s[i + 1]]; // 다음 값 s[1] = value(C) = 100

    if (current < next) {
      // 현재 값이 다음 값 보다 작으면 answer에 다음값에서 현재값을 뺀 후 더해줌
      answer += next - current;
      // i를 증가시킴
      i++;
    } else {
      // 현재 값이 다음 값 보다 클 경우 answer에 현재 값을 더해줌
      answer += current;
    }
  }
  return answer;
};

console.log(romanToInt(str));
