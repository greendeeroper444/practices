const original = [10, 20, 30, 40, 50];
console.log("Original Array:", original);

// 1. concat()
const more = [60, 70];
const combined = original.concat(more);
console.log("\nconcat():", combined); // [10, 20, 30, 40, 50, 60, 70]

// 2. slice()
const sliced = original.slice(1, 4); // From index 1 to 3
console.log("slice(1, 4):", sliced); // [20, 30, 40]

// 3. join()
const joined = original.join(" - ");
console.log("join(' - '):", joined); // "10 - 20 - 30 - 40 - 50"

// 4. toString()
const str = original.toString();
console.log("toString():", str); // "10,20,30,40,50"

// 5. toLocaleString()
const localStr = original.toLocaleString();
console.log("toLocaleString():", localStr); // May depend on locale: "10,20,30,40,50"

// 6. indexOf()
const index = original.indexOf(30);
console.log("indexOf(30):", index); // 2

// 7. lastIndexOf()
const repeated = [10, 20, 30, 20, 40];
const lastIndex = repeated.lastIndexOf(20);
console.log("lastIndexOf(20):", lastIndex); // 3

// 8. includes()
const has40 = original.includes(40);
const has99 = original.includes(99);
console.log("includes(40):", has40);  // true
console.log("includes(99):", has99);  // false

// 9. at()
console.log("at(2):", original.at(2));   // 30
console.log("at(-1):", original.at(-1)); // 50
