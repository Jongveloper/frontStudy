{
  interface Shape {
    getArea(): number; // Shape interface에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자
  }

  class Circle implements Shape {
    // implements 를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시

    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    getArea() {
      return this.radius * this.radius * Math.PI;
    }
  }

  class Rectangle implements Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
    getArea() {
      return this.width * this.height;
    }
  }

  const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

  shapes.forEach((shape) => {
    console.log(shape.getArea());
  });

  interface Person {
    name: string;
    age?: number; // 설정해도 되고 안해도 되는 값
  }
  // interface Developer {
  //   name: string;
  //   age?: number;
  //   skills: string[];
  // }

  interface Developer extends Person {
    skills: string[];
  }

  const person: Person = {
    name: '추나윤',
    age: 28,
  };

  const expert: Developer = {
    name: '우종혁',
    skills: ['javascript', 'react', 'redux', 'NodeExpress', 'typescript'],
  };

  const people: Person[] = [person, expert];
}
