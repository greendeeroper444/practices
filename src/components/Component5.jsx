import React, { useEffect } from 'react'

function Component5() {
    const totalStars = 5;
    const filledStars = 3;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
        if (i < filledStars) {
            stars.push(
                <span key={i} style={{ color: 'gold', fontSize: '24px' }}>★</span>
            );
        } else {
            stars.push(
                <span key={i} style={{ color: 'lightgray', fontSize: '24px' }}>★</span>
            );
        }
    }
    
    useEffect(() => {
        if (true) {
            var message = 'This is a message';
        }

        console.log(message);

        if (true) {
            let message2 = 'This is a message2';
            console.log(message2);
        }

        var message3 = 'This is a message3';
        var message3 = 'This is a message4';
        console.log(message3);

        const constVariable = {name: 'Meriam'};

        constVariable.name = 'Greendee';
        console.log(constVariable)

        {
            var a = 1;
            console.log(a);
            let b = 2;
            console.log(b);
            const c = 3;
            console.log(c);
        }
        console.log(a);
        // console.log(b);
        // console.log(c);

    }, [])
  return (
    <div>
        <h2>Component5</h2>
        <div>{stars}</div>
    </div>
  )
}

export default Component5