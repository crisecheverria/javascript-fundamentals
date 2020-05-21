/*
'this' keyword. The scope of 'this' depends from the context where is called. (Kyle Simpson)
Source: https://frontendmasters.com/courses/javascript-foundations/binding-confusion/
 */

/*
this: determination
1. Is the function called on a context object?
2. Is called from a function. Default: global object (except strict mode)
3. Is the function called by 'new'?
 */

const person = {
  name: 'Cristian',
  age: 34,
  getName: function () {
    console.log(this);
  },
};

person.getName();
const getName = person.getName;
getName();

// Binding 'this'
const getName = person.getName.bind(person);
getName();

// Another example
var myObject = {
  name: 'Bruce Object',
  me: function () {
    this.name = 'Joker Object';
    console.log(this);
  },
};

myObject.me(); // { name: 'Joker Object', me: [Function: me] }

// Solution

const person = {
  name: 'Bruce',
  lastname: 'Wayne',
  fullname: function () {
    return this.name + ' ' + this.lastname;
  },
};

const print = function (greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
};

print('hello', 'special');

// Solution: Using bind()
const print = function (greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
}.bind(person);

print('hello', 'special');

// Solution: Using call()
const print = function (greet, adj) {
  console.log(greet, this.fullname(), 'you are', adj);
};

print.call(person, 'hello', 'special');

// Solution: Using apply()
print.apply(person, ['hello', 'special']);

// Arrow Functions && 'this'

const pokemon = {
  name: 'Cristian',
  age: 34,
  fight() {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};

// Solucion: Usar Arrow Function

const pokemonGo = {
  name: 'Cristian',
  age: 34,
  fight() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};
// ------------------------------

// Classes

const pokemon = {
  name: 'Cristian',
  fight() {
    console.log('fight');
  },
};

const pokemon2 = {
  name: 'Pablo',
  fight() {
    console.log('fight');
  },
};

// Avoid Code Duplication & Create a Class instead

class Pokemon {
  constructor(name) {
    this.name = name;
  }
  fight() {
    console.log('fight');
  }
}

const pokemon = new Pokemon('Cris');

// Inheritance

class Pokemon {
  constructor(name) {
    this.name = name;
  }
  fight() {
    console.log('fight');
  }
}

class Instructor extends Pokemon {
  training() {
    console.log('training');
  }
}

const instructor = new Instructor('Jhon');
instructor.fight();

// Inherence the same constructor from previews class

// If we want to add a new constructor we call super()

class Instructor extends Pokemon {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  training() {
    console.log('Training with ' + this.name + ' Who is a ' + this.level);
  }
}

const instructor = new Instructor('Jhon', 'Ninja');
instructor.training();

// --------------------------

const car = {
  model: ['rav4', 'corolla', '4runner'],
  brand: 'toyota',
  printModel: function () {
    console.log(
      this.model.forEach(function (m) {
        console.log(this.brand, m);
      }, this)
    );
  },
};

console.log(car.printModel());

// ==================================================================

function foo() {
  console.log(this.bar);
}

var bar = 'bar1'; // Global scope = undefined
var o2 = { bar: 'bar2', foo: foo };
var o3 = { bar: 'bar3', foo: foo };

foo(); // default binding
o2.foo(); // implicit binding (called on a context object)
o3.foo(); // implicit binding (called on a context object)

// Hard binding (bind)
function test(baz, bam) {
  console.log(`${this.bar} ${baz} ${bam}`);
}

var obj = { bar: 'bar' };
test = test.bind(obj, 'baz');
test('bam');

// arrow functions and 'THIS'

function printLemurName() {
  console.log('nothing here but us globals');
}

const lemurLand = {
  lemurs: ['Dave', 'John', 'Alice', 'Tanya', 'Ramon'],
  printLemurName: function (lemur) {
    console.log('This lemus is called ' + lemur);
  },
  printAllLemurNames: function () {
    this.lemurs.forEach(function (lemur) {
      this.printLemurName(lemur);
    });
  },
};

console.log(lemurLand.printAllLemurNames());

/* 'new' keyboard
// new es una llamada Constructor y no es similar al 'new' de lenguajes que usan Clases, JS realmente no tiene clases, sólamente las emula. 'new' retorna un objeto 
*/

function newKeyword() {
  this.name = 'Cristian';
  console.log(this);
}

var name1 = new newKeyword(); // 'new' hace que 'this' haga referencia al objeto dentro de la funcion
console.log(name1);

var name2 = newKeyword(); // Sin 'new', 'this' hace referencia al global object
console.log(name2);

/* 3 cosas hace 'new' por nosotros:
1- Crea un objeto vacío
2- Asigna el scope de 'this' ha dicho objeto
3- Retorna 'this' que en este caso es el objeto creado con sus propiedades.
*/

const name5 = new String('John');
console.log(name5);

if (name5 == 'John') {
  console.log('yes');
} else {
  console.log('No');
}

// == Only compares values
// === Compares typeof
