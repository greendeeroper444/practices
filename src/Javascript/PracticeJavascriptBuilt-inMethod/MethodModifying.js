let arr;

// 1. push() Adds elements to the end of array, returns new length.
arr = [1, 2, 3];
console.log("Original (push):", arr);
let pushed = arr.push(4, 5); // Adds 4 and 5 at the end
console.log("After push:", arr, "| Pushed:", pushed);

// 2. pop() Removes and returns the last element from array.
arr = [1, 2, 3];
console.log("\nOriginal (pop):", arr);
let popped = arr.pop(); // Removes last element
console.log("After pop:", arr, "| Popped:", popped);

// 3. shift() Removes and returns the first element from array.
arr = [1, 2, 3];
console.log("\nOriginal (shift):", arr);
let shifted = arr.shift(); // Removes first element
console.log("After shift:", arr, "| Shifted:", shifted);

// 4. unshift() Adds elements to the beginning of array, returns new length.
arr = [2, 3];
console.log("\nOriginal (unshift):", arr);
arr.unshift(0, 1); // Adds 0 and 1 at the start
console.log("After unshift:", arr);

// 5. splice() Removes/replaces elements at specified index and optionally inserts new elements, returns removed elements.
arr = [1, 2, 3, 4, 5];
console.log("\nOriginal (splice):", arr);
let spliced = arr.splice(2, 2, 'a', 'b'); // Remove 2 elements from index 2, insert 'a', 'b'
console.log("After splice:", arr, "| Spliced out:", spliced);

// 6. sort() Sorts array elements in place (alphabetically by default), returns the sorted array.
arr = [3, 1, 4, 2];
console.log("\nOriginal (sort):", arr);
arr.sort(); // Sorts alphabetically/numerically (by Unicode by default)
console.log("After sort:", arr);

// 7. reverse() Reverses the order of elements in place, returns the reversed array.
arr = [1, 2, 3];
console.log("\nOriginal (reverse):", arr);
arr.reverse(); // Reverses order
console.log("After reverse:", arr);

// 8. fill() Fills array elements with a static value from start to end index.
arr = [1, 2, 3, 4];
console.log("\nOriginal (fill):", arr);
arr.fill(0, 1, 3); // Fills from index 1 to 2 with 0
console.log("After fill:", arr);

// 9. copyWithin()  Copies array elements to another position within the same array.
arr = [1, 2, 3, 4, 5];
console.log("\nOriginal (copyWithin):", arr);
arr.copyWithin(1, 3, 5); // Copy values from index 3–4 to start at index 1
console.log("After copyWithin:", arr);
