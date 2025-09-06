// ?. Optional chaining operator - safely accesses nested properties
let user = { profile: { address: { street: '123 Main St' } } };
console.log('Optional chaining (user?.profile?.address?.street):', user?.profile?.address?.street); // '123 Main St'

let user2 = { profile: null };
console.log('Optional chaining with null (user2?.profile?.address?.street):', user2?.profile?.address?.street); // undefined

// ?.() Optional method call - safely calls methods
let obj = { method: () => 'Hello' };
console.log('Optional method call (obj?.method?.()):', obj?.method?.()); // 'Hello'

// ?.[] Optional bracket notation - safely accesses properties with brackets
let data = { items: ['apple', 'banana'] };
console.log('Optional bracket access (data?.items?.[0]):', data?.items?.[0]); // 'apple'
