class Pokemon {
  constructor(name) {
    this.name = name;
  }
  fight() {
    console.log('fight');
  }
}

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
