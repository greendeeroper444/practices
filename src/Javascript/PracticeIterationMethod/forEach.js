// const animals = ['Lion', 'Tiger', 'Monkey'];
// const final = [];
// animals.forEach(animal => {
//     final.push(`Animal: ${animal}`);
// });
// console.log(final);




// const animals = ['Lion', 'Tiger', 'Monkey'];
// animals.forEach(animal => console.log(animal))



//=====Simple using join ======
// const animals = ['Lion', 'Tiger', 'Monkey'];
// const final = animals.join(', ');
// console.log(final); // Output: Lion, Tiger, Monkey



// ============With title, comma, etc. =====
// const animals = ['Lion', 'Tiger', 'Monkey'];

// const titles = {
//     Lion: 'King',
//     Tiger: 'Warrior',
//     Monkey: 'Clown'
// };


// //initializations
// let final = '';

// animals.forEach((animal, index) => {
//     // final += animal + '\n'; // adds the animal followed by a newline to the final string
//     // final += animal; // equivalent to: final = final + animal; appends the current animal to the final string
//     // final += animal + ' '; // Lion Tiger Monkey to have a space
//     final += `${titles[animal]} : ` + animal;

//     //display a comma and space if it's not the last item
//     if (index !== animals.length - 1) {
//         // console.log(index !== animals.length - 1)
//         // true true
//         // console.log(animals.length - 1)
//         // console.log(index)
//         //0 !== 2 = true
//         //1 !== 2 = true
//         //2 !== 2 = false
//         final += ', ';
//     }
// });

// console.log(final);

//======== with forloop =========
const animals = ['Lion', 'Tiger', 'Monkey'];
const traits = {
    Lion: ['Brave', 'Strong'],
    Tiger: ['Fast', 'Fearless'],
    Monkey: ['Smart', 'Funny']
};

let final = '';

animals.forEach((animal, index) => {
    final += `Traits of ${animal}: `;

    for (let i = 0; i < traits[animal].length; i++) {
        final += traits[animal][i];

        if (i !== traits[animal].length - 1) {
            final += ', ';
        }
    }

    if (index !== animals.length - 1) {
        final += ' | ';
    }
});

console.log(final);
