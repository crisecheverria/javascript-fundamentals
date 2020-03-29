// Enumerating properties of an Object

const person = {
  name: 'Cristian',
  age: 34,
  lastName: 'Echeverria',
  fullName() {
    console.log(`${this.name} ${this.lastName}`);
  }
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    const element = person[key];
    console.log(element);
  }
}

for (const iterator of Object.keys(person)) {
  console.log(person[iterator]);
}

// Clonning Objects

const anotherPerson = {};
for (const key in person) {
  anotherPerson[key] = person[key];
}
console.log(anotherPerson);

const anotherPerson2 = Object.assign({}, person);
console.log(anotherPerson2);

const anotherPerson3 = { ...person };
console.log(anotherPerson3);

// Exercises
let address = {
  street: 'Jägaregatan',
  city: 'Gotemburgo',
  zipCode: 41711
};

function showAddress(address) {
  for (const key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

console.log(showAddress(address));

// factory function

function initAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

const newAddress = initAddress('Herculesgatan', 'Gotemburgo', '1111');

console.log(newAddress);

// constructor function
function InitAddress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const anotherAddress = new InitAddress('Bokgatan', 'Vänersborg', 2222);

console.log(anotherAddress);
