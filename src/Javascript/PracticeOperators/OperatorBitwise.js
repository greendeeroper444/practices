// & Bitwise AND operator - performs AND operation on each bit
let bit1 = 19; // 100111 in binary
let bit2 = 9; // 001001 in binary
console.log('Bitwise AND (&):', bit1 & bit2); // 1 (000001 in binary)

// | Bitwise OR operator - performs OR operation on each bit
let bitA = 5; // 101 in binary
let bitB = 3; // 011 in binary
console.log('Bitwise OR (|):', bitA | bitB); // 7 (111 in binary)

// ^ Bitwise XOR operator - performs XOR operation on each bit
let xor1 = 5; // 101 in binary
let xor2 = 3; // 011 in binary
console.log('Bitwise XOR (^):', xor1 ^ xor2); // 6 (110 in binary)

// ~ Bitwise NOT operator - inverts all bits
let original = 5; // 101 in binary
console.log('Bitwise NOT (~):', ~original); // -6

// << Left shift operator - shifts bits to the left
let leftNum = 5; // 101 in binary
console.log('Left shift (<<):', leftNum << 1); // 10 (1010 in binary)

// >> Right shift operator - shifts bits to the right
let rightNum = 10; // 1010 in binary
console.log('Right shift (>>):', rightNum >> 1); // 5 (101 in binary)

// >>> Zero-fill right shift operator - shifts bits right with zero fill
let zeroFill = 10;
console.log('Zero-fill right shift (>>>):', zeroFill >>> 1); // 5
