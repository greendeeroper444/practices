const arr = ['Lion', 'Tiger', 100, 'Monkey', 20, 300, true, false];

function separatePrimitiveDataTypes(arr) {
    //typeof helps to detect the type of each item, and .filter() uses that to categorize or separate the data based on type.
    const strings = arr.filter(item => typeof item === 'string');
    const numbers = arr.filter(item => typeof item === 'number');
    numbers.sort((a, b) => a-b);
    const booleans = arr.filter(item => typeof item === 'boolean');

    return {strings, numbers, booleans};
}

let result = separatePrimitiveDataTypes(arr);

console.log('String:',  result.strings);
console.log('Number:',  result.numbers);
console.log('Boolean:',  result.booleans);