// () Function call operator - executes functions
function greet() {
    return 'Hello!';
}
console.log(greet()); // 'Hello!'

// new Constructor operator - creates new instances
function Person(name) {
    this.name = name;
}
let person1 = new Person('Bob');
console.log(person1.name); // 'Bob'