const person1 = {
  firtsName: 'Cristian',
  lastName: 'Echeverria',
  age: 34,
  fullName() {
    console.log(`${this.firtsName} ${this.lastName}`);
  },
};

function Person(firtsName, lastName, age) {
  this.firtsName = firtsName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    console.log(`${this.firtsName} ${this.lastName}`);
  };
}

const person2 = new Person('Juan', 'Lopez', 45);
console.log(person2);
