/*
'this' keyword. El scope de 'this' depende del origen del cual
la función ha sido llamada. (Kyle Simpson)
Fuent: https://frontendmasters.com/courses/javascript-foundations/binding-confusion/
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
  getName: function() {
    console.log(this);
  }
};

console.log(person.getName());

const car = {
  model: ['rav4', 'corolla', '4runner'],
  brand: 'toyota',
  printModel: function() {
    console.log(
      this.model.forEach(function(m) {
        console.log(this.brand, m);
      }, this)
    );
  }
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

const name2 = new String('John');
console.log(name2);

if (name2 == 'John') {
  console.log('yes');
} else {
  console.log('No');
}

// == Solamente compara el Valor
// === Compara el Tipo de variable
