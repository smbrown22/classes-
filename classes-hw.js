const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const buttons = document.getElementById('buttons');

// USE THIS LOG FUNCTION TO OUTPUT TO THE PAGE.
// THINK OF IT LIKE A CONSOLE.LOG() BUT ON THE PAGE :)

function log(text) {
  output.textContent += text + "\n";
}

function clearLog() {
  output.textContent = '';
}

const problems = [
  function problem1() {
    // Problem 1:
    // Create a class called Calculator with two methods:
    //  - add(x, y): returns the sum of x and y
    //  - subtract(x, y): returns the result of x minus y
    // Then create an instance and call both methods.

    // Write your class and code here

    class Calculator {
       add(x,y) {
        return x + y 
      }
      subtract(x, y) {
        return x - y
      }
    }
    const addInstance = new Calculator()
    const subtractInstance = new Calculator()
    text = [addInstance.add(3, 3), subtractInstance.subtract(3 , 1)]
    output.textContent = text
  },
  function problem2() {
    // Problem 2:
    // Create a class called Person with two methods:
    //  - setName(name): sets a property called name
    //  - getName(): returns the name
    // Then create an instance, set the name to your name, and log it using getName().

    // Write your class and code here

    class Person {
      setName(name) {
        this.name = name; 
      }
      getName() {
        return this.name 
      }
    }
    const person1 = new Person
    person1.setName("Jack")
    text = person1.getName()
    console.log(text)
    output.textContent = text
  },
  function problem3() {
    // Problem 3:
    // Create a class called Bird with a method fly() that logs "Flying"
    // Create a class called Penguin that extends Bird and overrides the fly() method to log "Penguins can't fly"
    // Then create one Bird and one Penguin, and call their fly() methods.

    // Write your class and code here

    class Bird {
      fly() {
        this.text = "flying"
        return this.text 
      }
    }
    class Penguin extends Bird {
      fly() {
        this.text = "Penguins can't fly"
        return this.text 
      }
    }
    const bird = new Bird()
    const penguin = new Penguin()

    text = [bird.fly() , penguin.fly()]
    output.textContent = text 
  },
  function problem4() {
    // Problem 4:
    // Create a base class called Shape with a method describe() that logs "I'm a shape"
    // Create two subclasses: Circle and Square
    // - Circle's describe() method logs "I'm a circle"
    // - Square's describe() method logs "I'm a square"
    // Then create instances of Circle and Square and call their describe() methods.

    // Write your class and code here

    class Shape {
      constructor() {
        return "I am a shape"
      }
  }
    class Square extends Shape {
      constructor() {
        return "I am a square"
      }
    }
    class Circle extends Shape {
      constructor() {
        return "I am a circle"
      }
    }
    const circle = new Circle
    const square = new Square 
    const shape = new Shape

    text = [circle, square, shape]
    output.textContent = text 
}
  , function problem5() {
    // Problem 5:
    // Create a class called Employee with a method work() that logs "Working..."
    // Create a subclass called Manager that has an additional method hireEmployee() that logs "Employee hired"
    // Then create an instance of Manager, and call both methods.

    // Write your class and code here

    class Employee {
      working() {
        this.meme = "working..."
        return this.meme
        console.log(this.meme)
      }
    }
    class Manager extends Employee {
      working() {
        this.meme = "working..." 
        this.extra = "Hires Employee"
        return this.extra + " " + this.meme
      }
    }
    const manager = new Manager()
    const employee = new Employee()

    text = [manager.working(), employee.working()]
    output.textContent = text
  }
  
];

problems.forEach((fn, index) => {
  const btn = document.createElement('button');
  btn.textContent = `Run Problem ${index + 1}`;
  btn.addEventListener('click', () => {
    clearLog();
    fn();
  });
  buttons.appendChild(btn);
});
