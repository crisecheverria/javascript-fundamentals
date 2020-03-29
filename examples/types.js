/*
Valores primitivos o Value Types en JS:
- String
- Number
- Boolean
- Symbol
- BigInt
- undefined
- null

Estos valores son INMUTABLES
Valores objetos o Reference Values
- Object
- Array
- Function
 */

let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

// Se copia su valor entre ellos

// Objetos
let a = { value: 10 };
let b = a;

a.value = 20;
console.log(a);
console.log(b);

/*
El valor de los objetos no son almacenados en la variable 'a'
sino que es almacenado en otro lugar en memoria
'b' hace referencia a esa direccion en memoria, y no a la variable 'a'
*/

/*
Conclusión:
1- Primitivos son copiados por su Valor
2- Objetos son copiados por su Referencia en memoria
 */

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number);

// Objects
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
