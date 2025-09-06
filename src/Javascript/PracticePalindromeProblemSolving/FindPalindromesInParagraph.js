
function findPalindromeInParagraph(paragraph) {
    ///\s+/ is a regex that matches one or more whitespace characters
    // This will split the paragraph into words based on whitespace
    const words = paragraph.split(/\s+/); //split by whitspace and into raw words
    console.log(`Words: ${words}`);
    const results = [];

    for (let i = 0; i < words.length / 2; i++) {
        // const wordHalf = words.length / 2;
        // console.log(`Word Half: ${wordHalf}`);
        const originalWord  = words[i];
        const cleaned = originalWord.toLowerCase().replace(/[^a-z0-9]/g, '');
        // console.log(`Cleaned Word: ${cleaned}`);

        if (cleaned.length >= 2) { //cleaned.length >= 2 to skip single character words like "d"
            let isPalindrome = true;
            console.log(`Cleaned Word Length ${cleaned}: `, cleaned.length >= 2);

            for (let j = 0; j < cleaned.length / 2; j++) {
                if (cleaned[j] !== cleaned[cleaned.length - 1 - j]) {
                    isPalindrome = false;
                    break;
                }
            }
            if (isPalindrome) {
                results.push({
                    word: originalWord,
                    cleaned: cleaned,
                    index: i,
                    isPalindrome: true
                });
            }
        }
    }

    return results;
}

const paragraph = "Anna d went to see civic cars. Wow! She said, 'Madam, that kayak is racecar-fast!'";
let result = findPalindromeInParagraph(paragraph);

console.log(JSON.stringify(result, null, 2));