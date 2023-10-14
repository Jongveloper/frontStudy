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
**상수에는 기본값이 없다.** 변수 대신 상수를 만들고 초기화가 필요하다는 점 외에 const는 let과 같다.
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
- **변수는 유지 관리를 위해 가능한 한 좁게 범위를 지정해야 한다.**
  - 변수를 유지 관리하기 위해 범위를 좁게 지정하는 이유는 사이드 이펙트를 줄이기 위해서다.
  범위가 넓다면 변수가 변경될 수 있는 위치가 늘어난다. 따라서 코드를 읽고 이해하기가 더 어려워진다.
  변수는 필요한 만큼만 존재해야 하며 그 이후 더 이상 없어야 한다.
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
위 코드는 문법상 완벽하게 맞다. **x를 두 번 이상 선언한다는 사실은 자바스크립트 엔진에서 완전히 무시된다.**
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
TDZ는 코드 실행이 선언이 나타나는 범위에 들어갈 때 시작되고 선언이 실행될 때까지 계속된다(초기화가 붙어 있는 상태로). 이 예에서 answer는 notInitializedYet(TDZ가 시작되는 곳)의 시작 부분에 예약되고 선언이 있는 곳(TDZ가 끝나는 곳)에서 초기화된다. 따라서 let과 const는 역시 호이스트되고 var와는 다르게 호이스트된다.

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
위 코드에 상수에 객체에 대한 **참조**가 있다.
obj 상수는 객체를 직접 포함하지 않고 객체에 대한 참조를 포함한다.
물론 이것은 개념적일 뿐이며 객체 참조의 실제 값을 볼 수 없다.
따라서 객체의 상태를 변경할 때 obj 상수의 값은 변경하지 않는다.
여전히 동일한 객체에 대한 참조이다. 상태가 업데이트 되어 value 속성에 대해 다른 값을 저장만 하면 된다.
const가 하는 일은 다른 객체를 참조하거나 null 또는 완전히 다른 것으로 설정하는 것처럼 obj의 실제 값을 변경하지 못하도록 하는 것이다.

### 바인딩: 변수, 상수, 기타 식별자의 작동 방식
```js
let x = 42;
```
x라는 식별자에 대한 바인딩을 만들고 해당 바인딩의 저장소 슬롯에 값 42를 저장한다.
이 경우 **변경 가능한** 바인딩이다.
상수를 만들 때는 **변경할 수 없는** 바인딩을 만든다.
다음 코드가 실행되는 컨텍스트의 환경 객체는
```js
let a = 1;
const b = 2;
```
- 이름: "a"
- 값: 1
- 종류: 식별자
- 변경 가능 여부: true
---
- 이름: "b"
- 값: 2
- 종류: 식별자
- 변경 가능 여부: false
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
자바스크립트 엔진은 기존 함수를 생성자로 사용할지 여부를 미리 알 수 없기 때문에 생성하는 모든 기존 함수에 참조할 프로토타입 속성과 객체를 넣어야 한다.
그런데 화살표 함수는 생성자가 될 수 없으므로 prototype 속성을 받지 않는다.
화살표 함수는 객체가 첨부된 프로토타입 속성을 가질 필요가 없기 때문에 화살표 함수는 기존 함수보다 가벼워질 수 있다.

# 기본값과 매개변수
```js
/*
* 명령형 프로그래밍
*/
function animate(type, duration) {
  if (duration === undefined) {
    duration = 300;
  }
  // 작업 수행
}
```
```js
/*
* 선언적 프로그래밍
*/
function animate(type, duration = 300) {
  // 작업 수행
}
```
위 코드를 사용법이 더 간결하고 쉬워졌다.
함수가 호출될 때 매개변수의 값이 undefined면 기본값이 사용된다.

### 기본값은 함수의 인자 수에 포함되지 않는다.
함수의 **인자 수**는 일반적으로 함수가 가지고 있는 공식 선언 매개변수의 수로 정의되며, 함수의 length속성에서 가져올 수 있다.
```js
function none() {}
console.log(none.length); // 0

function one(a) {}
console.log(one.length); // 1

function two(a, b) {}
console.log(two.length); // 2
```
자바스크립트에서 기본값이 있는 매개변수는 인자 수를 계산할 때 계산되지 않으며 실제로 후속 매개변수도 계산되지 않는다.
```js
function stillOne(a, b = 42) {}
console.log(stillOne.length); // 1

function oneYetAgain(a, b = 42, c) {}
console.log(oneYetAgain.length); // 1
```
stillOne 함수의 결과는 간단하다. 기본값이 없는 하나의 매개변수와 기본값이 있는 매개변수가 있으므로 그 인자 수는 1이다.
oneYetAgain 함수의 결과는 c 매개변수에 명시적인 기본값이 없지만 앞에 있는 매개변수에 기본 값이 있기 때문에 인자수에 포함되지 않는다.
# Class
언어가 클래스를 가지려면 캡슐화(데이터와 메서드를 함께 묶음)와 상속, 이렇게 둘을 제공해야 한다.
클래스를 갖는다는 것은 클래스 기반과 같지 않으며 언어가 캡슐화 및 상속화를 지원한다는 의미이다.
```js
class Color {
  constructor(r = 0, g = 0, b = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  get rgb() {
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }

  set rgb(value) {
    // 추후..
  }

  toString() {
    // toString을 재정의 (오버라이드함)
    return this.rgb;
  }

  static fromCSS(css) {
    // 추후..
  }
}

let c = new Color(30, 144, 255);;
console.log(String(c)); // 'rgb(30, 144, 255)'
c = Color.fromCSS("00A");
console.log(String(c)); // "rgb(0, 0, 170)"
```
위 코드는 다음과 같이 클래스를 정의한다.
- 생성자
- 세 가지 **데이터 속성**(r,g,b)
- **접근자 속성**(r,g,b)
- **프로토타입 메서드**(toString, 일반적으로 인스턴스를 통해 접근하기 때문에 **인스턴스 메서드** 라고도 하지만 ** 프로토타입 메서드**가 더 정확하다. 실제 **인스턴스 메서드**는 프로토타입에서 상속되지 않고 인스턴스에만 존재한다)
- **정적 메서드**(fromCSS, 종종 **클래스 메서드**라고도 한다)

부분별로 나누어서 만들어보면 다음과 같은 순서를 따른다.
우선 가장 먼저 작성해야 할 것은 클래스 정의 자체다.
```js
// 클래스 정의
class Color {}

// 익명 클래스 정의
let Color = class {}

// 클래스 정의
let C = class Color {};
```
클래스 선언은 함수 선언처럼 호이스팅 되지 않는다.
대신 임시 데드존으로 완성된 let 및 const 선언과 같이 준호이스팅된다.
초기화가 아닌 식별자만 호이스팅된다. let 및 const와 마찬가지로 전역 스코프에서 클래스를 선언하면 클래스의 식별자는 전역이지만 전역 객체의 속성이 아니다.

### 생성자 추가
생성자 정의에서 생성자에 대한 코드를 정의한다.
```js
class Color {
  constructor(r=0, g=0, b=0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
```
위 코드는 클래스의 식별자인 Color와 연관될 함수를 정의한다.
생성자는 함수이지만 객체 생성 프로세스의 일부로만 호출할 수 있다.
생성자 함수를 실행하려면 new를 사용한 결과 또는 Reflect.construct 호출의 결과여야 한다.
객체를 생성하지 않을 때 호출하려고 하면 오류가 발생한다.
클래스 내부의 코드는 클래스 외부의 코드가 엄격 모드가 아니더라도 항상 엄격 모드다.
### 인스턴스 속성 추가
클래스의 새 인스턴스 속성을 설정하는 표준 방법은 생성자에서 속성을 할당하는 것이다.
```js
class Color {
  constructor(r=0, g=0, b=0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
```
이러한 속성은 기본 할당을 통해 생성되기 때문에 구성, 쓰기, 열거가 가능하다.
즉, 삭제가 가능하고 오버라이드가 가능하고 `for(key in this)`를 하면 key가 나온다.
당연히 매개변수에서 가져온 속성에 추가하여 생성자 인수에서 가져오지 않는 속성을 설정할 수 있다.
리터러러이나 다른 곳에서 가져온 값만 사용하면 된다. 예를들어 모든 Color 인스턴스가 검은색으로 시작되도록 하려면 r,g,b 매개변수를 생략하고 r,g,b 속성이 모두 0 값으로 시작하도록 할 수 있다.
```js
class Color {
  constructor() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
}
```
### 프로토타입 메서드 추가
모든 인스턴스가 접근할 수 있도록 클래스의 프로토타입 객체에 배치할 메서드를 추가해보자
```js
class Color {
  constructor(r = 0, g = 0, b = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  toString() {
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }
}
```
```js
const c = new Color(30, 144, 255);
console.log(c.toString()); // "rgb(30, 144, 255)"
```
생성자 정의와 toString 정의 사이에는 쉼표가 없다. 객체 리터럴이 있는 경우와 마찬가지다.
클래스 정의는 객체 리터럴과 다르다. 쉼표로 구분하지 않는다.
### 정적 메서드 추가
```js
class Color {
  // ...
  static fromCSS(css) {
    const match = /^#?([0-9a-f]{3}|[0-9a-f]{6});?$/i.exec(css);
    if (!match) {
      throw new Error("Invalid CSS color: " + css);
    }
    let vals = match[1];
    if (vals.length === 3) {
      vals = vals[0] + vals[0] + vals[1] + vals[1] + vals[2] + vals[2];
    }
    return new this(
      parseInt(vals.substr(0, 2), 16),
      parseInt(vals.substr(2, 2), 16),
      parseInt(vals.substr(4, 2), 16)
    );
  }
}
```
static 키워드는 자바스크립트 엔진이 Color.prototype이 아닌 Color 자체에 해당 메서드를 배치하도록 지시한다. **Color에서 직접 호출한다**.
프로토타입 메서드와 마찬가지로 메서드 구문을 사용한다는 것은 fromCSS에 객체가 할당된 프로토타입 속성이 없다는 것을 의미한다.
### static메서드와 instance메서드의 차이
```js
class Example {
  static staticMethod() {
    console.log('This is a static method');
  }

  instanceMethod() {
    console.log('This is an instance method');
  }
}

Example.staticMethod(); // 정상적으로 호출됨
Example.instanceMethod(); // 에러: instanceMethod는 정의되지 않았습니다.
const obj = new Example();
obj.staticMethod(); // 에러: staticMethod는 정의되지 않았습니다.
obj.instanceMethod(); // 정상적으로 호출됨
```
- 접근 가능성
  - Static 메서드: 클래스 내부에서만 접근 가능하다. 즉, 인스턴스의 속성에는 접근할 수 없다.
  - Instance 메서드: 클래스 내부 및 해당 클래스의 인스턴스에 모두 접근 가능하다.
- 사용 사례
  - Static 메서드: 객체의 상태와 무관한 동작이 필요할 때 유용하다. 예를들어, 유틸 함수를 만들거나 객체를 생성하는 팩토리 메서드를 정의할 때 사용할 수 있다.
  - Instance 메서드: 주로 객체의 상태와 동작을 다룰 때 사용된다. 객체의 특정 인스턴스에 대해 작동하는 메서드를 정의한다.
#### 계산기 예시
```js
class Calculator {
  static add(a,b) {
    return a+b;
  }

  subtract(a,b) {
    return a - b;
  }
}

Calculator.add(5,3); // 8
const calc = new Calculator();
calc.subtract(5,3); // 2
```

위의 예에서 **add**는 두 숫자를 더하는 동작으로, 객체의 상태에 의존하지 않는다.
따라서 이 메서드는 static으로 정의된다.
하지만 **subtract**는 객체의 상태를 변경하지 않고 두 숫자를 뺄셈하는 동작으로, 객체의 인스턴스에서 호출된다.

요약하면, static메서드는 클래스의 전반적인 동작과 관련이 있고, 인스턴스 메서드는 객체의 상태와 특정한 인스턴스와 관련이 있다.
### 접근자 속성 추가
접근자 속성은 getter 메서드, setter 메서드, setter 메서드 또는 둘 다 모두가 있는 속성이다.
Color의 경우 색상을 표준 rgb(r,g,b) 문자열로 가져오는 rgb속성을 제공하고 문자열 자체를 만드는 대신 해당 속성을 사용하도록 toString 메서드를 추가할 수 있다.
```js
class Color {
  // ...
  get rgb() {
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }

  toString() {
    return this.rgb;
  }
}
let c = new Color(30, 144, 255);
console.log(String(c)); // "rgb(30, 144, 255)"
```
지금까지 Color의 rgb 접근자는 읽기 전용이다(setter가 없는 getter).setter를 추가하려면 set메서드도 정의해야한다.
```js
class Color {
  // ...
  get rgb() {
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }

  set rgb(value) {
    let s = String(value);
    let match = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.exec(
      s.replace(/\s/g, "")
    );
    if (!match) {
      throw new Error("Invalid RGB color: " + s);
    }
    this.r = parseInt(match[1], 10);
    this.g = parseInt(match[2], 10);
    this.b = parseInt(match[3], 10);
  }
}
```
### 서브클래스
새로운 문법은 기본 클래스에서도 유용하지만 실제로는 서브클래스와 함께 사용할 때 더욱 유용하다.
```js
class Color {
  constructor(r = 0, g = 0, b = 0) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  get rgb() {
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }

  set rgb(value) {
    let s = String(value);
    let match = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/i.exec(
      s.replace(/\s/g, "")
    );
    if (!match) {
      throw new Error("Invalid RGB color: " + s);
    }
    this.r = parseInt(match[1], 10);
    this.g = parseInt(match[2], 10);
    this.b = parseInt(match[3], 10);
  }

  toString() {  
    return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
  }

  static fromCSS(css) {
    const match = /^#?([0-9a-f]{3}|[0-9a-f]{6});?$/i.exec(css);
    if (!match) {
      throw new Error("Invalid CSS color: " + css);
    }
    let vals = match[1];
    if (vals.length === 3) {
      vals = vals[0] + vals[0] + vals[1] + vals[1] + vals[2] + vals[2];
    }
    return new this(
      parseInt(vals.substr(0, 2), 16),
      parseInt(vals.substr(2, 2), 16),
      parseInt(vals.substr(4, 2), 16)
    );
  }
}

let c = new Color(30, 144, 255);;
console.log(String(c)); // 'rgb(30, 144, 255)'
c = Color.fromCSS("00A");
console.log(String(c)); // "rgb(0, 0, 170)"

class ColorWithAlpha extends Color {}

const col = new ColorWithAlpha(30, 144, 255);
console.log(String(col)); // rgb(30,144,255);
```
ColorWithAlpha는 Color의 서브클래스다.
ColorWithAlpha는 명시적으로 정의된 생성자가 없더라도 이를 사용하여 색상을 구성해도 잘 작동한다.
**자바스크립트 엔진이 기본 생성자를 제공했기 때문이다.**
엔진이 기본 클래스에 대해 제공하는 아무것도 하지 않는 기본값 대신 서브클래스의 기본값은 슈퍼 클래스의 생성자를 호출하여 모든 인수를 전달한다.

### super 키워드
ColorWithAlpha에 기능을 추가하려면 많은 경우 새로운 키워드인 super에 대해 알아야한다.
슈퍼클래스의 측면을 참조하기 위해 생성자와 메서드에서 super을 사용한다.
- super() : 서브클래스 생성자에서 마치 객체를 생성하는 함수인 것 처럼 super를 호출하고 슈퍼클래스가 객체의 초기화를 수행하도록 한다.
- super.property와 super.method(): super.property와 super.method()가 대신 super에서 접근하여 슈퍼클래스 프로타입의 속성 및 메서드를 참조한다.
```js
class ColorWithAlpha extends Color {
  constructor(r=0, g=0, b=0, a=1) {
    super(r, g, b);
    this.a = a;
  }
}
```
ColorWithAlpha가 가장 먼저 하는 일은 super를 호출하고 r,g,b 매개변수를 전달하는 것이다.
이렇게하면 객체가 생성되고 Color가 객체를 초기화할 수 있다.
때때로 서브클래스 메서드는 구현의 일부로 슈퍼클래스 메서드를 호출해야 한다.
### 계산된 속성 이름
ES5에서 이름이 변수에서 온 속성을 사용하여 객체를 만들려면 먼저 객체를 만든 후 다음과 같이 별도 작업으로 속성을 추가해야한다.
```js
var name = "answer";
var obj = {};
obj[name] = 42;
console.log(obj); // {answer : 42}
```
ES2015는 속성 정의 자체에 앞의 코드에서 사용된 대괄호와 같이 대괄호를 사용하는 계산된 속성이름을 추가했다.
```js
var name = "answer";
var obj = {
  [name]: 42
};
console.log(obj); // {answer : 42}
```
속성 정의의 대괄호는 속성 값을 가져오거나 설정할 때 항상 사용했던 대괄호처럼 작동한다.
즉, 대괄호 안의 모든 표현식을 사용할 수 있으며 표현식의 결과가 이름으로 사용된다.
```js
let prefix = "ans";
let obj = {
  [prefix + "wer"]: 42
};
console.log(obj); // {answer : 42}
```
표현식은 각 속성 정의가 평가될 때(소스 코드 순서대로) 객체 리터럴 평가의 일부로 즉시 평가된다.
따라서 표현식은 다른 표현식의 결과를 기반으로 할 수 있다.
### 객체의 프로토타입 얻기와 설정하기
생성자 함수를 통해 특정 프로터타입 객체로부터 상속받은 객체를 생성하는 것은 항상 가느앻ㅆ다.
ES5는 Object.create를 통해 직접 수행하고 Object.getPrototypeOf를 통해 객체의 프로토타입을 가져오는 기능을 추가했다.
ES2015에는 기존 객체의 프로토타입을 설정하는 기능이 추가되었다.
### Object.setPrototypeOf
이를 수행하는 기본 방법은 Object.setPrototypeOf를 통해 변경할 수 있으며 변경할 객체와 제공할 프로토타입을 받는다.
```js
const p1 = {
  greet: function() {
    console.log("p1 greet, name = " + this.name);
  }
};
const p2 = {
  greet: function() {
    console.log("p2 greet, name = " + this.name);
  }
};

const obj = Object.create(p1);
obj.name = "Joe";
obj.greet(); // "p1 greet, name = Joe"
Object.setPrototypeOf(obj, p2);
obj.greet(); // "p2 greet, name = Joe"
```
위 코드에서 obj는 프로토타입으로 p1을 사용하여 시작하므로 obj.greet()에 대한 첫 번 째 호출은
p1의 인사를 사용하고 "p1 greet, name = Joe"를 출력한다. 그런 다음 코드는 코드는 p2를 사용하도록 obj의 프로토타입을 변경하므로 두 번째 greet 호출은 p2의 greet를 사용하고 "p2 greet, name = Joe"를 출력한다.
객체를 만든 후 프로토타입을 변경하는 것은 드문 일이며 그렇게하면 객체를 최적화 해제하여 속성 조회가 훨씬 느려질 수 있다.
### 브라우저에서 __proto__ 속성
브라우저 환경에서 __proto__라는 접근자 속성을 사용하여 객체의 프로토타입을 가져오고 설정할 수 있지만 새 코드에서는 그렇게 하지 않는 것이 좋다.
공식적으로 브라우저가 아닌 자바스크렙트 엔전에서는 정의되지 않았기 때문이다.
```js
const p1 = {
  greet: function() {
    console.log("p1 greet, name = " + this.name);
  }
};

const p2 = {
  greet: function() {
    console.log("p2 greet, name = " + this.name);
  }
};
const obj = Object.create(p1);
obj.name = "Joe";
obj.greet(); // "p1 greet, name = Joe"
obj.__proto__ = p2;
obj.greet(); // "p2 greet, name = Joe"
```
__proto__는 OBject.prototype에 의해 정의된 접근자 속성이므로 사용하는 객체는 Object.prototype에서 상속해야 사용할 수 있다.
예를들어 Object.create(null)을 통해 생성된 객체에는 __proto_가 없으며 해당 객체를 프로토타입으로 사용하는 객체도 없다.
### 메서드 문법과 super 외부 클래스
```js
var obj1= {
  name: "Joe",
  say: function() {
    console.log(this.name);
  }
};
obj1.say() // "Joe"
```
```js
const obj2 = {
  name: "Joe",
  say() {
    console.log(this.name);
  }
};
obj2.say();
```
클래스에서처럼 메스드 구문은 기존 함수로 초기화된 속성보다 더 많거나 적은 작업을 수행한다.
메서드에서 객체로 다시 연결하는 목적은 메서드 내에서 super 사용을 지원하는 것이다.
예를들어 toString 함수가 프로토타입의 toString을 사용했지만 모두 대문자로 만든 객체를 만들고 싶다고 가정했을때, ES5에서는 다음과 같이 프로토타입의 함수를 명시적으로 호출해야 했다.
```js
var obj = {
  toString: function() {
    return Object.prototype.toString.call(this).toUpperCase();
  }
};
console.log(obj.toString()); // '[object OBJECT]'
ES2015+에서는 메서드 구문과 super를 사용할 수 있따.
```
```js
const obj = {
  toString() {
    return super.toString().toUpperCase();
  }
};
console.log(obj.toString()); // '[OBJECT OBJECT]'
```
메서드 이름은 리터럴 식별자일 필요는 없다. 속성 키와 마찬가지로 문자열 또는 계산된 이름일 수 있다.
```js
const s = "ple";
const obj = {
  "biz-baz"() {
    console.log("Ran biz-baz");
  },
  ["exam" + s]() {
    console.log("Ran example");
  }
};
obj["biz-baz"]() // "Ran biz-baz"
obj.example() // "Ran example"
```
