//str is the parameter for the function
function isPalindrome(str) {
    //normalize the string (lowercase + remove non-alphanumeric)
    //cleanedstr //convert str to lowercase.
//remove all non-alphanumeric characters (letters and numbers only).
    //toLowerCase() is to make the string case-insensitive
    ///[^a-z0-9]/gi is a regular expression or regex that matches any character that is not a letter or digit
    //gi means global and case-insensitive
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    //use a for loop to check from both ends
    //i < cleanedStr.length / 2 ensures we only check half of the string, for example "A man, a plan, a canal, Panama"
    //because if the first half matches the second half, it's a palindrome
    for (let i = 0; i < cleanedStr.length / 2; i++) {
        // const cleanedStrHalf = cleanedStr.length / 2;
        // console.log(`Cleaned String Half: `, cleanedStrHalf);
        //cleanedStr[i] is the character from the start
        //cleanedStr[cleanedStr.length - 1 - i] is the character from the end
        //if they are not equal, it's not a palindrome
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return `"${str}" is not a palindrome.`;
        }
        //cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i] is a condition that checks if the characters at the current index and the corresponding index from the end are not equal
        //example cleanedStr[0] !== cleanedStr[6 - 0] → 'r' !== 'r' →  false → they're equal
        //example cleanedStr[1] !== cleanedStr[6 - 1] → 'a' !== 'a' →  false → they're equal
        //example cleanedStr[2] !== cleanedStr[6 - 2] → 'c' !== 'c' →  false → they're equal
        //example cleanedStr[3] !== cleanedStr[6 - 3] → 'e' !== 'e' →  false → they're equal
        //so if all characters are equal, it means the string is a palindrome
        //!== means not equal, so if the characters are not equal, it will return false
        //then return means the function will stop executing and return the value
    }

    return `"${str}" is a palindrome.`;
    //then the outside return means the function will return the value if all characters are equal
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("Madram"))