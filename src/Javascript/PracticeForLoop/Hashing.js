//simulated hash helper (for demo only, not secure)
function hashHelper(password) {
    //fake hash using base64 and a salt
    const salt = 'staticSalt123';
    return btoa(password + salt);
}

//static user data
const users = [
    { id: 1, username: 'alice', password: 'alice123' },
    { id: 2, username: 'bob', password: 'bob456' },
    { id: 3, username: 'charlie', password: 'charlie789' }
];

//hash each password before storing
for (let i = 0; i < users.length; i++) {
    users[i].password = hashHelper(users[i].password);
}

console.log('Users with hashed passwords:');
// console.table(users); 

//convert the Base64 to string
const userNeedToAtob = users;
// console.log(userNeedToAtob)

// decode the Base64 password back to original
const decodedUsers = userNeedToAtob.map(user => ({
    id: user.id,
    username: user.username,
    password: atob(user.password).replace('staticSalt123', '')
}));

console.log('Decoded Users:');
console.table(decodedUsers);