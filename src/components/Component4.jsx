import React, { useEffect } from 'react'

function Component4() {
    const name = ' Greendee ';
    let reverseName = '';

    // part 1
    for (let i = name.length - 1; i >= 0; i--) {
        reverseName += name[i]; 
    }

    //part 2
    function reverseName2(name) {
        let reversed = '';
        for (let i = name.length - 1; i >= 0; i--) {
            reversed += name[i];
        }
        return reversed;
    }
    useEffect(() => {
        console.log(reverseName2('Roper'))
    }, [])

    // part 3
    const trimmedName = name.trim(); // remove leading/trailing spaces
    const reversedName = trimmedName.split('').reverse().join('');
    
  return (
    <div>
        <h2>Component 4</h2>
        <h2>---FORLOOP---</h2>
        {/* using for loop */}
        <h2>Original Name: {name}</h2>
        <h2>Reversed Name: {reverseName}</h2>

        <br />

        <h2>---TRIM, SPLIT, REVERSE, JOIN---</h2>
        {/* using split, reverse, join and trim */}
        <h2>Original (with spaces): "{name}"</h2>
        <h2>Trimmed: "{trimmedName}"</h2>
        <h2>Reversed: "{reversedName}"</h2>
    </div>
  )
}

export default Component4