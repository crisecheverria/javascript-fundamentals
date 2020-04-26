// example1
function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function (question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop('Cris');
var reactJS = new Workshop('John');
// example2
var Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log(`Hi, I am ${this.name}`);
  }
};

var person1 = new Person('Mary');

var Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log(`Hi, I am ${this.name} the ${this.title}`);
  }
};

var employee1 = new Employee('Cris', 'Developer');
console.log(employee1);
employee1.greet();
person1.greet();
