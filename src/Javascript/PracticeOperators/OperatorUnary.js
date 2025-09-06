// + Unary plus operator - converts operand to number
let stringNum = '42';
console.log('Unary plus (+):', +stringNum); // 42

// - Unary minus operator - negates operand
let positive = 5;
console.log('Unary minus (-):', -positive); // -5

// ! Logical NOT operator - converts to boolean and negates
let truthy = 'hello';
console.log('Logical NOT (!):', !truthy); // false

// ~ Bitwise NOT operator - inverts bits
let bitValue = 5;
console.log('Bitwise NOT (~):', ~bitValue); // -6

// typeof Type operator - returns type as string
let variable = true;
console.log('Typeof operator (typeof):', typeof variable); // 'boolean'

// void Void operator - evaluates expression and returns undefined
console.log('Void operator (void):', void 0); // undefined

// delete Delete operator - removes object property
let testObj = { prop: 'value' };
delete testObj.prop;
console.log('Delete operator (delete):', testObj.prop); // undefined
