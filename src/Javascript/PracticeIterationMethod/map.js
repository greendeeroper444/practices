const animals = ['Lion', 'Tiger', 'Gorilla'];

const messages = animals.map((animal) => {
    const lion = 'King of the animals';
    const tiger = 'Warrior of the animals';
    const gorilla = 'King of the forest';

    let kind;
    if (animal[1]) {
        kind = lion;
    } else if (animal[2]) {
        kind = tiger;
    } else if (animal[3]) {
        kind = gorilla;
    }
    

    return `${animals}, ${kind}`;
})


console.log(messages)