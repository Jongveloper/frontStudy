/*
  Point : {
    this는 호출하는 방법에 따라 달라진다.
    function() =>  함수 꼴로 호출을 하면 this는 window가 된다.
    obj.function() =>  하지만 앞에 객체를 붙여 호출하면 this가 obj가 된다.
    호출 스택을 그릴 때 this를 정할 수 있다.
  }
  ***** 중요 ******
  즉 , this는 호출될 때 결정된다.
  */

// console.log(this);
/*
개발자 도구에서 실행 시
window가 출력됨
*/

function a() {
  console.log(this);
}
// a();
/*
개발자 도구에서 실행 시
window가 출력된다.
*/

function b() {
  'use strict';
  console.log(this);
}
// b();
/*
개발자 도구에서 실행 시
strict모드에서는 undefined가 출력된다.
*/

const obj = {
  name: 'woody',
  sayName() {
    console.log(this.name);
  },
};
// obj.sayName();
/*
woody가 출력된다.
함수 앞에 객체가 붙으면 this가 전역객체를 가리키는 것이 아닌 함수 앞의 객체를 가리킨다.
*/

const obj2 = {
  name: 'woody2',
  sayName2: () => {
    console.log(this.name);
  },
};
// obj2.sayName2();
/*
undefined가 출력된다.
*/

const obj3 = {
  name: 'woody3',
  sayName3() {
    console.log(this.name);
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};
// obj3.sayName3();
/*
 woody가 두번 출력된다.
 화살표 함수의 this는 부모의 this를 가르킨다.
 부모의 this는 어떻게 알 수 있을까?
 위의 Point에 적혀있는 것 처럼
 부모가 어떻게 호출되었는지에 따라 결정된다.
*/

const callView = {
  name: 'woody',
  sayNameCall() {
    console.log(this.name);
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

// callView.sayNameCall();

/** CallStack
 * |                                               |
 * |                   log                         |
 * |inner{화살표 함수임}(this = 부모의 this/ 즉 callView)|
 * |                   log                         |
 * |       callView.sayNameCall(this=callView)     |
 * |          anonymous(this = window)             |
 * |_______________________________________________|
 * **log 상황**
 * woody찍힘
 * woody찍힘
 */

const callViewNormal = {
  name: 'woody',
  sayNameCall() {
    console.log(this.name);
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

// callViewNormal.sayNameCall();

/** CallStack
 * |                                               |
 * |                   log                         |
 * |       inner{일반 함수} (this = window)          |
 * |                   log                         |
 * |       callView.sayNameCall(this=callView)     |
 * |          anonymous(this = window)             |
 * |_______________________________________________|
 * **log 상황**
 * woody 찍힘
 * undefined 찍힘
 */

const callViewCall = {
  name: 'woody',
  sayNameCall() {
    console.log(this.name);
    function inner() {
      console.log(this.name);
    }
    inner.call(callViewCall);
  },
};
callViewCall.sayNameCall();
/** CallStack
 * |                                                                    |
 * |                             log                                    |
 * | inner{일반 함수}(this를 명시적으로 call로 조작했기 때문에 this는 callViewCall) |
 * |                             log                                    |
 * |               callView.sayNameCall(this=callView)                  |
 * |                  anonymous(this = window)                          |
 * |____________________________________________________________________|
 * **log 상황**
 * woody 찍힘
 * woody 찍힘
 */

function a() {}

/**
 * bind
 * const b = a.bind(window) => a를 호출하는 것이아닌 a함수의 this만 바꿔 새로운 함수를 만드는 것
 * 즉, bind는 this만 바꾼 새로운 함수를 만들어 줌
 * 만약 함수를 호출하려면 b()라고 함수를 호출해야함
 *
 * apply
 * a.apply(window) === a.bind(window)() === a.call(window)
 *
 * call과 apply의 차이점
 * 함수 호출하는 법이 틀림
 * function add(a, b) { return a + b }
 * add.apply(null, [3,5]) => 배열로 넣어줌
 * add.call(null, 3, 5) => 하나씩 넣어줌
 */
