

//=========MY CODE[I solved] ==========
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


//=========Best Code ==========

function analyzePalindrome(str) {

    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    for (let i = 0; i < cleanedStr.length / 2; i++) {
        const left = cleanedStr[i];
        const right = cleanedStr[cleanedStr.length - 1 - i];

        if (left !== right) {
            const result = {
                original: str, 
                cleaned: cleanedStr, 
                isPalindrome: false, 
                mismatch: {
                            indexLeft: i,
                            charLeft: left,
                            indexRight: cleanedStr.length - 1 - i,
                            charRight: right
                        }
            }
            console.log(JSON.stringify(result, null, 2));
            return result;
        }
    }
    const result = {
        original: str, 
        cleaned: cleanedStr, 
        isPalindrome: true, 
        mismatch: null
    }
    console.log(JSON.stringify(result, null, 2));
    return result;
}

analyzePalindrome("racecar");
analyzePalindrome("Madlam");