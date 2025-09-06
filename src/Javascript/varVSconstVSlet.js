// let - can reassign
let x = 5;
x = 10;        // ✅ Works fine
x = "hello";   // ✅ Works fine

// const - cannot reassign
const y = 5;
y = 10;        // ❌ TypeError: Assignment to constant variable