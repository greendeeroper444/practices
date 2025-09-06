// && Logical AND operator - returns true if both operands are true
let isAdult = true;
let hasLicense = true;
console.log('Logical AND (&&):', isAdult && hasLicense); // true

// || Logical OR operator - returns true if at least one operand is true
let isWeekend = false;
let isHoliday = true;
console.log('Logical OR (||):', isWeekend || isHoliday); // true

// ! Logical NOT operator - reverses the boolean value
let isLoggedIn = false;
console.log('Logical NOT (!):', !isLoggedIn); // true

// ?? Nullish coalescing operator - returns right operand if left is null or undefined
let username = null;
let defaultName = 'Guest';
console.log('Nullish coalescing (??):', username ?? defaultName); // 'Guest'
