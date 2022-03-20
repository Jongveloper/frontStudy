const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5); // 8
calculator(add, 3, 5); // 8

/* 실수 할 수 있는 경우
document.querySelector('#header').addEventListener('click', add());
===
document.querySelector('#header').addEventListener('click', undefined + undefined);
이유 : add 함수를 호출하게되면 인자에 아무것도 넣지 않았기 때문에 undefined가 할당되어 위와 같이 됨
포인트 : 함수의 호출은 함수의 리턴값으로 대체해서 보자!
*/
