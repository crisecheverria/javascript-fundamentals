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

// Enumate Properties in an object

for (const key in person2) {
  console.log(key, person2[key]);
}

// List all the properties
const keys = Object.keys(person2);
console.log(keys);

// Check if a property exist
if ('firstName' in person2) {
  console.log('Person has a firstName property');
}
