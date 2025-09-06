
//========MY CODE [I solved] ==========
// function detailedPalindromeCheck(str) {

//     //convert str to lowercase.

//     //remove all non-alphanumeric characters (letters and numbers only).
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

//     for (let i = 0; i < cleanedStr.length /2; i++) {
//         if (cleanedStr[i] === cleanedStr[cleanedStr.length - 1 - i]) {
//             console.log(`"${cleanedStr} is a palindrome!"`);
//             return;
//         } else {
//             console.log("Not a palindrome:", `"${cleanedStr[i]}"`, "does not match", `"${cleanedStr[cleanedStr.length - 1 - i]}"`, "at index", i, "and", cleanedStr.length - 1 - i);
//             return;
//         }
//     }
// }


// detailedPalindromeCheck("Racecar");
// detailedPalindromeCheck("hello")

//=========Best Code ==========
function detailedPalindromeCheck(str) {
    //clean the string
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    //loop to check both ends
    for (let i = 0; i < cleanedStr.length / 2; i++) {
        const left = cleanedStr[i];
        const right = cleanedStr[cleanedStr.length - 1 - i];

        if (left !== right) {
            console.log(`Not a palindrome: '${left}' does not match '${right}' at index ${i} and ${cleanedStr.length - 1 - i}`);
            return;
        }
    }

    //if no mismatches found
    console.log(`"${str}" is a palindrome!`);
}

detailedPalindromeCheck("Racecar");
detailedPalindromeCheck("hello");
