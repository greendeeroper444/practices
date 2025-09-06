import React, { useEffect, useState } from 'react'

function Component3() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(interval); // cleanup
    }, []);
    
  return (
    <div>
        <h2>Component 3</h2>
        <p>Timer: {seconds} seconds</p>
    </div>
  )
}

export default Component3