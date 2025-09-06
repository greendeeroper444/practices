// Primitives are immutable
let str = "hello";
str.toUpperCase(); // Returns new string, doesn't modify original
console.log(str); // Still "hello"

// Objects are mutable
let obj = {name: "Alice"};
obj.name = "Bob";
console.log(obj.name); // "Bob" - original object modified