# 웹개발자를 위한 자바스크립트의 모든 것
### 정의, 이해관계자, 용어
자바스크립트는 Ecma International에 의해 "ECMAScript"로 표준화되었다.
### ES2015~ES2020까지 자바스크립트에 추가된 새로운 기능
- 언어에 포함된 블록 스코프(let, const): 변수에 대한 범위가 더 좁아지고, for 루프 내 범위의 영리한 처리, 값이 변경될 수 없는 "변수"(const)
- 화살표 함수: 가볍고 간결한 함수로, 호출될 때 설정된 고유한 this 값을 갖는 대신 this를 포함하기 때문에 콜백에 특히 유용함
- 함수 매개변수 개선: 기본값, 매개변수 디스트럭처링, "나머지" 매개변수, 후행 쉼표
- 이터러블 객체: 반복 가능한 객체(예: 배열과 문자열), 언어 내 반복 구조를 만들고 사용하기 위한 잘 정의된 의미 체계, 반복할 수 있는 시퀀스를 생성하기 위한 제너레이터 함수(비동기 시퀀스 포함)
- 스프레드 구문: 배열(또는 다른 이터러블) 엔트리를 새 배열로, 객체 속성을 새 객체로, 이터러블 엔트리를 개별 함수 인수로 분산하여 함수형 프로그래밍이나 불변 구조가 사용되는 모든 곳에서 특히 유용함
- 나머지 구문: 객체 속성의 나머지, 이터러블 값이나 함수 인수를 객체나 배열로 모으기
- 기타 구문 개선: 함수를 호출할 때 인수 목록에 후행 쉼표를 허용하고, catch 절에서 사용하지 않는 식별자를 생략함. 새로운 스타일의 8진수 리터럴, 이진수 리터럴, 숫자 표기 시 구분 문자, 기타 등등
- 디스트럭처링: 객체와 배열 리터럴과 유사한 간결한 방식으로 배열/객체에서 값 선택
- 클래스: 자바스크립트의 고유한 프로토타입 특성을 유지하면서 생성자 함수와 관련 프로토타입 객체를 생성하기 위한 훨씬 간단하고 선언적인 구문
- 비동기 프로그래밍 개선: Promise, 비동기 함수(async await), 콜백 지옥이 현저히 감소
- 객체 리터럴 개선: 계산된 속성 이름, 단축 속성, 메서드 구문, 속성 정의 뒤의 후행 쉼표
- 템플릿 리터럴: 동적 콘텐츠로 문자열을 만들고 태그가 지정된 템플릿 함수를 사용하여 문자열을 넘어서는 간단하고 선언적인 방법
- 타입이 있는 배열: 네이티브 API를 사용하기 위한 저수준용 배열
- 공유 메모리: 자바스크립트 스렉드 간에 메모리를 공유하는 기능
- 유니코드 문자열 개선: 유니코드 코드 포인트 이스케이프 시퀀스, 코드 단위 대신 코드 포인트 접근 지원
- 정규 표현식 개선: 후방 탐색 지정, 이름을 지정한 캡처 그룹, 인덱스 캡처, 유니코드 속성 이스케이프, 유니코드 대소문자 구분 없음
- 맵: 키가 문자열일 필요가 없는 키/값 컬렉션
- 세트: 잘 정의된 의미를 가진 고유한 값 모음
- 위크맵, 위크세트, 약한 참조: 객체에 대한 약한 참조만 보유하기 위해 포함됨
- 표준 라이브러리 추가: Object, Array, Raay.prototype, String, String.prototype, Math등에 대한 새로운 메서드
- 심볼: 보장된 고윳값
- BigInt: 임의의 정밀도 정수
- 그리고 그 외의 많은 기능들
### 블록 스코프 선언: let과 const
var와 마찬가지로 let은 변수를 선언한다.
```js
let x = 2;
x += 40;
console.log(num); // 42
```
var를 사용할 수 있는 모든 곳에서 let을 사용할 수 있다. var와 마찬가지로 let은 초기화할 필요가 없다. 이때 변숫값은 기본적으로 undefined로 설정된다.
```js
let a;
console.log(a); // undefined
```
위의 내용을 제외하면 var와 let은 매우 다르게 동작한다.

---
const는 상수를 선언한다.
```js
const value = Math.random();
console.log(value < 0.5 ? '윗면': '아랫면'); 
```
상수는 값이 변경될 수 없다는 점을 제외하면 변수와 같다.
따라서 **초기화**를 해야한다.
상수에는 기본값이 없다. 변수 대신 상수를 만들고 초기화가 필요하다는 점 외에 const는 let과 같다.
### 진짜 블록 스코프
var는 블록에서 튀어나온다. var로 블록 내에서 변수를 선언하면 해당 블록 내부뿐만 아니라 외부에서도 변수를 사용할 수 있다.
```js
function jumpOut() {
  var a = [1, 2, 3];
  for(var i = 0; i < a.length; ++i) {
    var value = a[i];
    console.log(value);
  }
  console.log('Outside loop' + value);
}
jumOut();
```
jumOut의 작성자는 아마도 루프 외부에서 값에 접근할 수 있도록 의도하지는 않았겠지만 접근할 수 있다. 왜 이것이 문제일까?
- 변수는 유지 관리를 위해 가능한 한 좁게 범위를 지정해야 한다.
필요한 만큼만 존재해야 하며 그 이후 더 이상 없어야 한다.
- 코드의 명백한 의도와 실제 효과가 다를 때마다 버그와 유지 관리 문제를 일으킨다.

let과 const는 선언된 **블록 내**에서만 존재한다.
```js
function stayContained() {
  var a = [1, 2, 3];
  for (var i = 0; i < a.length; ++i) {
    let value = a[i];
    console.log(value);
  }
  console.log('Outside loop' + value); // ReferenceError: 'value' is not defined
}
stayContained();
```
이제 value는 블록이 의미하는 대로 범위가 지정된다. 그 밖의 함수 영역에는 존재하지 않는다.
필요한 만큼만 존재하며 명백한 의도가 실제 효과와 일치한다.

### 반복된 선언은 에러다
```js
function redundantRepetition() {
  var x = 'apple';
  console.log(x);
  // 생략
  var x = 'bravo';
  // 생략
  return x;
}
```
위 코드는 문법상 완벽하게 맞다. x를 두 번 이상 선언한다는 사실은 자바스크립트 엔진에서 완전히 무시된다.
함수 전체에서 사용되는 단일 x 변수를 생성한다. 이전 블록의 var와 마찬가지로 코드의 명백한 의도와 실제 효과는 서로 상충된다.
let과 const는 동일한 범위에서 반복 선언을 하면 오류가 발생한다.
```js
function redundantRepetition() {
  let x = 'apple';
  console.log(x);
  ...
  let x = 'bravo'; // SyntaxError: Identifier 'x' has already been declared
  console.log(x);
  return x;
}
```
사전 예방적 오류로 알려주기 때문에 함수를 호출할 때까지 기다리지 않고 코드가 구문 분석될 때 오류가 발생한다.

### 호이스팅과 일시적 데드존
var 선언은 호이스팅된다.
var를 사용하면 변수를 선언하기 전에 사용할 수 있다.
```js
function example() {
  console.log(answer);
  answer = 42;
  console.log(answer);
  var answer = 67;
}

example();
/**
* undefined
* 42 
**/
```
변수가 선언되기 전에 사용했지만 var 선언이 함수의 맨 위로 이동한 것처럼 동작한다.
그리고 선언만 이동하고 그것에 연결된 초기화는 아니다.
이는 example 함수를 실행할 때 자바스크립트 엔진이 단계별 코드 실행을 시작하기 전에 var선언을 처리하고 필요한 변수를 생성하는 함수를 스캔하기 때문에 발생한다.
함수의 맨 위에 선언을 호이스트한다. 그렇게 할 때 undefined 기본값으로 선언한 변수를 초기화 한다. 그러나 코드의 명백한 의도와 실제 효과는 동기화되지 않았으므로 여기에 버그가 있음을 의미할 수 있다.
let과 const를 사용하면 코드의 단계별 실행에서 선언이 처리될 때까지 변수를 사용할 수 없다.
```js
function boringOldLinearTime() {
  answer = 42; // ReferenceError: 'answer' is not defined
  console.log(answer);
  let answer;
}
boringOldLinearTime();
```
겉보기에는 let 선언은 var 선언처럼 함수의 맨 위로 올라가지 않는다.
하지만 이것은 흔히 하는 **오해**다.
let과 const도 호이스팅된다. 단지 **다르게** 호이스팅될 뿐이다.
코드가 포함 범위의 answer에 할당하려고 시도했을 수 있다는 사실을 고려하자.
```js
let answer; // 외부 'answer'
function hoisting() {
  answer = 42; // ReferenceError: 'answer' is not defined
  console.log(answer);
  let answer; // 내부 'answer'
}
hoisting();
```
마지막에 내부의 let answer까지 answer가 존재하지 않는다면, 함수의 시작 부분에서 answer = 42; 라인이 외부 answer에 할당되어야하지 않는가?
let과 const는 임시 데드존(Temporal Dead Zone, TMZ)이라는 개념을 사용한다. 코드 실행 내에서 식별자를 전혀 사용할 수 없는 기간인 TDZ는 포함된 범위의 엔트리를 참조하는 데도 사용되지 않는다. var와 마찬가지로 자바스크립트 엔진은 코드의 단계별 실행을 시작하기 전에 let과 const 선언에 대한 코드를 살펴보고 처리한다.
```js
let answer; // 외부 answer
function notInitializedYet(){
  // 여기에 answer를 예약해 둔다.
  answer = 42; // ReferenceError: 'answer' is not defined
  console.log(answer);
  let answer; // 내부 answer
}
notInitializedYet();
```
TDZ는 코드 실행이 선언이 나타나는 범위에 들어갈 때 시작되고 선언이 실행될 때까지 계속된다(초기화가 붙어 있는 상태로). 이 예에서 answer는 notIntializedYet(TDZ가 시작되는 곳)의 시작 부분에 예약되고 선언이 있는 곳(TDZ가 끝나는 곳)에서 초기화된다. 따라서 let과 const는 역시 호이스트되고 var와는 다르게 호이스트된다.

TDZ는 공간적(위치 관련)이 아니라 시간적(시간 관련)이라는 점을 이해하는 것이 중요하다. 식별자를 사용할 수 없는 범위의 맨 위에 있는 영역이 아니다. 식별자를 사용할 수 없는 기간이다.

### 새로운 종류의 전역(global)
전역 객체의 속성이 아닌 것이 유용한 이유는 무엇일까?
다음의 이유가 있다.
- 전역 객체는 이미 가장 일반적인 환경인 웹 브라우저 속성으로 인해 극적으로 과부하 상태이다.
- 다른 코드에서 발견하기가 더 어렵다.
- 자바스크립트 엔진이 전역 객체의 속성에 적용할 수 없는 방식으로 변수에 대한 접근을 최적화할 수 있다.

### const: 자바스크립트의 상수
const는 상수를 만든다.
새 값을 할당할 수 없다는 점을 제외하면 동일한 ㅈ범위 규칙, 템프럴 데드존 등
모든 것은 let으로 변수를 만드는 것과 똑같다.
상수에 새 값을 할당하려하면 다음과 같은 오류가 발생한다.
```js
const answer = 42;
console.log(answer); // 42
answer = 67 // TypeError: invalid assignment to const 'answer' 
```

상수를 변경할 수 없는 것이 무엇인지 기억하는 것이 중요하다.
상수의 값이다. 그 값이 객체 참조라면 어떤식으로든 객체가 **변경 불가능**하다는 것을 의미하지는 않는다.
객체는 여전히 **변경 가능**하다. 이는 상숫값을 변경하기 때문에 다른 객체에 대한 상수 지점을 만들 수 없음을 의미한다.
```js
const obj = {
  value: "before"
};
console.log(obj.value);
```
위 코드에 상수에 객체에 대한 참조가 있다.
obj 상수는 객체를 직접 포함하지 않고 객체에 대한 참조를 포함한다.
물론 이것은 개념저깅ㄹ 뿐이며 객체 참조의 실제 값을 볼 수 없다.
따라서 객체의 상태를 변경할 때 obj 상수의 값은 변경하지 않는다.
여전히 동일한 객체에 대한 참조이다. 상태가 업데이트 되어 value 속성에 대해 다른 값을 저장만 하면 된다.
const가 하는 일은 다른 객체를 참조하거나 null 또는 완전히 다른 것으로 설정하는 것처럼 obj의 실제 값을 변경하지 못하도록 하는 것이다.

# 새로운 함수 기능
### 화살표 함수 문법
값이 30 미만인 엔트리만 유지하도록 배열을 필터링하는 함수를 만들어보자
```js
var array = [42 ,67 ,3 , 23 , 14];
var filtered = array.filter(function(entry) {
  return entry < 30;
});
console.log(filtered); // [3, 23, 14]
```
위의 코드를 화살표 함수로 변경해보자
```js
const array = [42 ,67 ,3 , 23 , 14];
const filtereed = array.filter(entry => entry < 30);
console.log(filtered); // [3, 23, 14]
```
### 기본값 매개변수
```js
function animate(type='fadeout', duration) {
  console.log(type + ", " + duration);
}
animate('fadeout', 300); // "fadeout, 300"
animate('undefined', 300); // "fadeout, 300"
animate('fadein', 300); // "fadein, 300"
animate(); // "fadeout, undefined"
```

### 간결한 형태의 화살표 함수
**값이 30 미만인 엔트리만 유지하도록 배열을 필터링**
- ES5
```js
var array = [42, 67, 3, 23, 14];
var filtered = array.filter(function(entry) {
  return entry 30;
});
```
- 화살표 함수
```js
const array = [42, 67, 3, 23, 14];
const filtered = array.filter(entry => entry < 30);
```
화살표 함수의 간결한 형태는 말 그대로 받아들이는 매개변수의 이름일 뿐이다.
화살표는 파서에게 이것이 화살표 함수임을 알리고, 표현식은 반환하는 값을 정의할 뿐이다.
function 키워드, 함수 본문을 정의하는 중괄호, return 키워드는 없다.
매개변수, 화살표, 본문 표현식만 있다.
화살표 함수가 여러 매개변수를 받아들이도록 하려면 매개변수 목록을 괄호로 묶어 모두가 화살표 함수의 매개변수임을 명확히 해야 한다.
화살표 뒤에 중괄호를 사용하여 함수 본문을 제공하여 함수 본문 양식을 사용할 수 있다.
```js
const array = [42, 67, 3, 23, 14];
array.sort((a,b) => {
  const aIsOdd = a % 2;
  const bIsOdd = b % 2;
  if(aIsOdd) {
    return bIssOdd ? a - b : 1;
  }
  return bIsOdd? 1 : a - b;
})
```
### 화살표 함수와 this
변수를 감싸는 것처럼 생성된 컨텍스트의 this를 감싼다.
객체 메서드에 코드를 작성하면서 콜백을 사용하고 싶지만 콜백 내에서 this가 객체를 참조하기를 원한다.
화살표 함수가 this만 감싸는 것은 아니다. 인수와 super와 new.target도 감싼다.
### 화살표 함수는 생성자가 될 수 없다.
화살표 함수는 this를 가지고 있지 않아서 화살표 함수가 생성자 함수가 될 수 없다.
생성자 함수의 주된 목적은 새로 생성된 객체를 채우는 것이다.
이는 this를 통해 함수에 전달된다.
함수에 고유한 것이 없으면 새 객체에 속성을 설정할 수 없으며 생성자가 되는 것은 의미가 없다. 생성자로 사용하는 것은 명시적으로 허용되지 않는다.
명시적으로 허용하지 않기 때문에 화살표 함수는 기존 함수보다 가벼워질 수 있다.
객체가 첨부된 프로토타입 속성을 가질 필요가 없기 때문이다.