const numbers = [1, 2, 3, 4, 5];

// 12. Array.isArray()
console.log("\nisArray():", Array.isArray(numbers)); // true

// 13. flat() Flattens nested arrays by specified depth level (1 = one level deep, 2 = two levels deep, etc.).
const nested = [1, [2, [3, [4]]]];
const flat1 = nested.flat(1);
const flat2 = nested.flat(2);
console.log("flat(1):", flat1); // [1, 2, [3, [4]]]
console.log("flat(2):", flat2); // [1, 2, 3, [4]]

// 14. flatMap() Maps each element using a function, then flattens the result by one level.
const words = ["hi", "hello"];
const mapped = words.flatMap(word => word.split(""));
console.log("flatMap():", mapped); // ['h','i','h','e','l','l','o']

// 15. entries() Returns an iterator of [index, value] pairs for each array element.
console.log("entries():");
for (const [index, value] of numbers.entries()) {
  console.log(index, value);
}

// 16. keys() Returns an iterator of array indices (0, 1, 2, etc.).
console.log("keys():");
for (const key of numbers.keys()) {
  console.log(key);
}

// 17. values()  Returns an iterator of array values.
console.log("values():");
for (const val of numbers.values()) {
  console.log(val);
}

// 18. btoa() Encodes a string to Base64 format.
const text = "Hello World!";
const encoded = btoa(text);
console.log("btoa():", encoded); // "SGVsbG8gV29ybGQh"

// 19. atob() Decodes Base64 to string format.
const base64String = "SGVsbG8gV29ybGQh";
const decoded = atob(base64String);
console.log("atob():", decoded); // "Hello World!"