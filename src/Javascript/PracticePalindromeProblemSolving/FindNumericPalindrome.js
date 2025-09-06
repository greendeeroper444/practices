
//=========MY CODE[I solved] ==========
// function findNumericPalindrome(arr) {
//     let results = [];

//     for (let num of arr) {
//         const cleanedArr = String(num).replace(/[^0-9]/g, ''); //we can also use num.toString() to convert number to string
//         console.log(`Cleaned Array: ${cleanedArr}`);

//         for (let i = 0; i < cleanedArr.length / 2; i++) {
//             if (cleanedArr[i] !== cleanedArr[cleanedArr.length - 1 - i]) {
//                 results.push({
//                     number: cleanedArr,
//                     isPalindrome: false
//                 })
//                 break; 
//             }
//         }
//         results.push({
//             number: cleanedArr,
//             isPalindrome: true
//         })
//     }
//     return results;
// }

// const nums = [121, 303, 444, 12321, 456, 789, 1001, 123];
// let result = findNumericPalindrome(nums);
// console.log(result)


//=========Best Code ==========
function findNumericPalindrome(arr) {
    const results = [];

    for (let num of arr) {
        const strNum = String(num);
        console.log(`String Number: ${strNum}`);
        let isPalindrome = true;

        for (let i = 0; i < strNum.length / 2; i++) {
            if (strNum[i] !== strNum[strNum.length - 1 - i]) {
                isPalindrome = false;
                break;
            }
        }

        results.push({
            number: num, // use the original number
            isPalindrome: isPalindrome
        });
    }

    return results;
}

const nums = [121, 303, 444, 12321, 456, 789, 1001, 123];
const result = findNumericPalindrome(nums);
console.log(JSON.stringify(result, null, 2));
