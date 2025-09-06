function analyzePalindromeList(arr) {
    const results = [];

    for (let str of arr) {
        const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        console.log(`Cleaned String: ${cleanedStr}`);
        // let isPalindrome = true;
        // let mismatch = null;

        for (let i = 0; i < cleanedStr.length / 2; i++) {
            const left = cleanedStr[i];
            const right = cleanedStr[cleanedStr.length - 1 - i];

            if (left !== right) {
                // isPalindrome = false;
                // mismatch = {
                //     indexLeft: i,
                //     charLeft: left,
                //     indexRight: cleanedStr.length - 1 - i,
                //     charRight: right
                // };
                // break; //no need to keep checking
                // Found mismatch - add to results and move to next string
                results.push({
                    original: str,
                    cleaned: cleanedStr,
                    length: cleanedStr.length,
                    isPalindrome: false,
                    mismatch: {
                        indexLeft: i,
                        charLeft: left,
                        indexRight: cleanedStr.length - 1 - i,
                        charRight: right
                    }
                });
                break; // move to next string
            }
        }

        //cleaner approach
        results.push({
            original: str,
            cleaned: cleanedStr,
            length: cleanedStr.length,
            isPalindrome: true,
            mismatch: null
        });

        //if we completed the loop without finding mismatch, it's a palindrome
        // if (results.length === 0 || results[results.length - 1].original !== str) {
        //     results.push({
        //         original: str,
        //         cleaned: cleanedStr,
        //         length: cleanedStr.length,
        //         isPalindrome: true,
        //         mismatch: null
        //     });
        // }
    }

    return results;
}

const inputs = [
    "Racecar",
    "Was it a car or a cat I saw?",
    "Madlam",
    "No lemon, no melon",
    "hello world"
];

// console.log((analyzePalindromeList(inputs)));

const result = analyzePalindromeList(inputs);

console.log(JSON.stringify(result, null, 2));