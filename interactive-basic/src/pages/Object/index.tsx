import React from "react";
import styled from 'styled-components'
type PersonType = {
  nickname: string;
  age: number;
}

type CardType = {
  num: number;
  color: string;
  init: () => {};
}

export default function Object() {
  // 생성자
  // introduce 함수는 공통적인 부분이기 때문에 생성자 함수에 넣으면 메모리가 낭비된다.
  // nickname, age 처럼 관리를 각각 해야하는 부분은 생성자 함수에 넣고
  // introduce처럼 공유하는 것이면 prototype으로 관리하는 것이 좋다.
  function Person(this: PersonType, nickname: string, age: number) {
    this.nickname = nickname;
    this.age = age;
  }

  // 공통으로 들어가는 메서드들은 공유하는 형태로 하는 것이 메모리 낭비를 하지않는다.
  Person.prototype.introduce = function () {
    console.log('안녕하세요? 저는 ' + this.nickname + '이고, 나이는' + this.age + '살이에요')
  }

  // 인스턴스
  const person1 = new (Person as any)('일분이', 10);
  const person2 = new (Person as any)('이분이', 8);

  person1.introduce();
  person2.introduce();

  function Card(this: CardType, num: number, color: string) {
    this.num = num;
    this.color = color;
    this.init();
  }

  Card.prototype = {
    constructor: Card,
    init: function () {
      const mainElem = document.createElement('div');
      mainElem.style.color = this.color;
      mainElem.innerHTML = this.num;
      mainElem.classList.add('bkUtZf');
      document.body.appendChild(mainElem);
    }
  }

  const card1 = new (Card as any)(1, 'green');
  const card2 = new (Card as any)(7, 'blue');


  return (
    <CardStyle />
  )
}


const CardStyle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 150px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 3rem;
  font-weight: 900;
`;