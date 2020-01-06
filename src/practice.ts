// type 은 특정 타입에 별칭을 붙이는 용도로 사용합니다. 이를 사용하여 객체를 위한 타입을 설정할 수도 있고, 배열, 또는 그 어떤 타입이던 별칭을 지어줄 수 있습니다.
type Person = {
  name: string;
  age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다
};

// & 는 Intersection 으로서 두 개 이상의 타입들을 합쳐줍니다.
// 참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: '김사랑',
  age: 20,
};

const expert: Developer = {
  name: '신개발',
  age: 30,
  skills: ['javascript', 'react'],
};

type People = Person[]; // Person[] 를 People 이라는 타입으로 사용할 수 있습니다.
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const colors: Color[] = ['red', 'orange'];

// 클래스와 관련된 타입의 경우엔 interface 를 사용하는게 좋고,
// 일반 객체의 타입의 경우엔 그냥 type을 사용해도 무방합니다.
