
//=========BASIC PALINDROME========
// function basicPalindrome(input) {

//     for (let i = 0; i < input.length / 2; i++) {
//         if (input[i] !== input[input.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(basicPalindrome('level'))


//===========SENTENCE PALINDROME===========
// function sentencePalindrome(input) {

//     const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/gi, '');

//     for (let i = 0; i < cleanedInput.length / 2; i++) {
//         if (cleanedInput[i] !== cleanedInput[cleanedInput.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(sentencePalindrome('A man, a plan, a canal, Panama'))


//=======NUMERIC PALINDROME=======
// function numericPalindrome(input) {

//     const cleanedInput = String(input);//also we can use input.toString();
    
//     for (let i = 0; i < cleanedInput.length / 2; i++) {
//         if (cleanedInput[i] !== cleanedInput[cleanedInput.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true;

// }

// console.log(numericPalindrome(1221))

//==========FIND ALL PALINDROMES IN PARAGRAPH==========
function findAllPalindromesInParagraph(input) {
    const words = input.split(/\s+/);
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
        const origWord = words[i];
        const cleanWord = origWord.toLowerCase().replace(/[^a-z0-9]/g, '');

        if(cleanWord.length >= 2) {
            let isPalindrome = true;
            
            for (let j = 0; j < cleanWord.length / 2; j++) {
               if (cleanWord[j] !== cleanWord[cleanWord.length - 1 - j]) {
                    isPalindrome = false;
                    break;
               }
            }
            if (isPalindrome) {
                result.push(origWord);
            }
        }
    }

    return result;
}


console.log(findAllPalindromesInParagraph('Anna saw civic cars like radar and kayak'))
