//////////////create object Person/////////////////////

const Person = {
  name: "Evgene",
  age: 28,
};

const Person = new Object();
Person.name = "Evgene";
Person.age = 28;

const Person = Object.create(
  {},
  {
    name: {
      value: "Evgene",
      enumerable: true,
      writable: true,
      configurable: true,
    },
    age: {
      value: 28,
      enumerable: true,
      writable: true,
      configurable: true,
    },
  }
);

const Person = Object.assign(
  {},
  {
    name: "Evgene",
    age: 28,
  }
);

//////////////////create class PersonThree///////////////////
class Person {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }
}

class PersonThree extends Person {
  constructor(options) {
    super(options);
    this.surname = options.surname;
  }
  get changeName() {
    return `My new name: ${this.name}`;
  }
  set changeName(newName) {
    this.name = newName;
  }
}

const person = new PersonThree({
  name: "Evgene",
  age: 28,
  surname: "Tupitsyn",
});

const person2 = Object.create(person);
person2.name = "Vladimir";
person2.age = 70;
person2.surname = "Putin";

person.logInfo = function () {
  return `My name is ${this.name}, I'm ${this.age} years old`;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 13;

const firstSum = (arr, total) => {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    for (let k = 0; k <= arr.length; k++) {
      if (arr[i] + arr[k] != total) continue;
      result.push(arr[i], arr[k]);
      return result;
    }
  }
};

firstSum(arr, total);

////////// сдожность алгоритма O(n^2)////////////////
