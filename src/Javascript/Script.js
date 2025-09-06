

// function reverseName(name) {
//     let reverseName = '';

//     for (let i = name.length - 1; i >= 0; i--) {
//         reverseName += name[i];
//     }

//     return reverseName;
// }

// console.log(reverseName('Roper'));

// const star = '⭐';
// const starEmpty = '★';
// const totalStar = 5;

// for (let i = 0; i < totalStar; i++) {
//     if (i < 3) {
//         console.log(star);
//     } else {
//         console.log(starEmpty);
//     }
// }

// const star = '*';

// for (let i = 1; i <= 5; i++) {
//     console.log(star.repeat(i));
// }

// const star = '*';

// for (let i = 1; i <= 5; i++) {
//     console.log(' '.repeat(5 - i) + star.repeat(2 * i - 1));
// }


// const star = '*';

// for (let i = 1; i <= 5; i++) {
//     let line = '';

//     //add leading spaces to center the stars
//     for (let s = 1; s <= 5 - i; s++) line += ' ';
//     //dd stars (odd number per line: 1, 3, 5, 7, 9)
//     for (let j = 1; j <= 2 * i - 1; j++) line += star;

//     console.log(line);
// }


// function isPalindrome(str) {
//     //normalize the string (lowercase + remove non-alphanumeric)
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

//     //use a for loop to check from both ends
//     for (let i = 0; i < cleanedStr.length / 2; i++) {
//         if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
//             console.log(`"${str}" is not a palindrome.`);
//             return;
//         }
//     }

//     console.log(`"${str}" is a palindrome.`);
// }

// isPalindrome("Racecar");
// isPalindrome("A man, a plan, a canal, Panama");
// isPalindrome("Hello");


// function isPalindrome(str) {
//     //normalize the string (lowercase + remove non-alphanumeric)
//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

//     //use a for loop to check from both ends
//     for (let i = 0; i < cleanedStr.length / 2; i++) {
//         if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
//             return false; //not a palindrome
//         }
//     }

//     return true; //is a palindrome
// }

// console.log(isPalindrome("Racecar")); // true
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// console.log(isPalindrome("Hello")); // false


// function analyzePalindrome(str) {

//     const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

//     for (let i = 0; i < cleanedStr.length / 2; i++) {
//         const left = cleanedStr[i];
//         const right = cleanedStr[cleanedStr.length - 1 - i];

//         if (left !== right) {
//             const result = {
//                 original: str, 
//                 cleaned: cleanedStr, 
//                 isPalindrome: false, 
//                 mismatch: {
//                             indexLeft: i,
//                             charLeft: left,
//                             indexRight: cleanedStr.length - 1 - i,
//                             charRight: right
//                         }
//             }
//             console.log(result);
//             return result;
//         }
//     }
//     const result = {
//         original: str, 
//         cleaned: cleanedStr, 
//         isPalindrome: true, 
//         mismatch: null
//     }
//     console.log(result);
//     return result;
// }

// analyzePalindrome("racecar");
// analyzePalindrome("Madlam");


// function analyzePalindromeList(arr) {
//     const results = [];

//     for (let str of arr) {
//         const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//         for (let i = 0; i < cleanedStr.length / 2; i++) {
//             const left = cleanedStr[i];
//             const right = cleanedStr[cleanedStr.length - 1 - i];

//             if (left !== right) {
//                 results.push({
//                     original: str,
//                     cleaned: cleanedStr,
//                     length: cleanedStr.length,
//                     isPalindrome: false,
//                     mismatch: {
//                         indexLeft: i,
//                         charLeft: left,
//                         indexRight: cleanedStr.length - 1 - i,
//                         charRight: right
//                     }
//                 });
//                 break; // move to next string
//             }
//         }

//         //cleaner approach
//         results.push({
//             original: str,
//             cleaned: cleanedStr,
//             length: cleanedStr.length,
//             isPalindrome: true,
//             mismatch: null
//         });
//     }

//     return results;
// }

// const inputs = [
//     "Racecar",
//     "Was it a car or a cat I saw?",
//     "Madlam",
//     "No lemon, no melon",
//     "hello world"
// ];

// const result = analyzePalindromeList(inputs);
// console.log(JSON.stringify(result, null, 2));



function findPalindromParagraph(paragraph) {

    const cleanedParagraph = paragraph.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/);

    for (let i = 0; i < cleanedParagraph.length / 2; i++) {
        const left = cleanedParagraph[i];
        const right = cleanedParagraph[cleanedParagraph.length - 1 - i];

        if (left === right) {
            const results = {
                word: paragraph,
                cleaned: cleanedParagraph,
                index: i,
                isPalindrome: true
            }
            return results;
        }
        
    }
}

const paragraph = "Anna went to see civic cars. Wow! She said, 'Madam, that kayak is racecar-fast!'";
let result = findPalindromParagraph(paragraph);

console.log(JSON.stringify(result, null, 2));