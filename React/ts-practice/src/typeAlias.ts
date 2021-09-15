{
  type Person = {
    name: string;
    age?: number;
  };

  type Developer = Person & {
    skills: string[];
  };

  const person: Person = {
    name: '홍길동',
  };

  const expert: Developer = {
    name: '김프로',
    skills: ['javascript', 'react'],
  };

  type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용할 수 있다.
  const people: People = [person, expert];

  type Color = 'red' | 'orange' | 'yellow';

  const color: Color = 'red';
  const colors: Color[] = ['red', 'orange'];
}
