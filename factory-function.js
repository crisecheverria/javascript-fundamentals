const person1 = {
  firtsName: 'Cristian',
  lastName: 'Echeverria',
  age: 34,
  fullName() {
    console.log(`${this.firtsName} ${this.lastName}`);
  },
};

function person(firtsName, lastName, age) {
  return {
    firtsName,
    lastName,
    age,
    fullName() {
      console.log(`${this.firtsName} ${this.lastName}`);
    },
  };
}

const person2 = person('Juan', 'Lopez', 45);
console.log(person2);
