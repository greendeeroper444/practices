// [] Array destructuring - extracts values from arrays
let colors = ['red', 'green', 'blue'];
let [primary, secondary, tertiary] = colors;
console.log(primary); // 'red'

// {} Object destructuring - extracts properties from objects
let person = { name: 'Alice', age: 30, city: 'New York' };
let { name, age } = person;
console.log(name); // 'Alice'
console.log(age); // 30