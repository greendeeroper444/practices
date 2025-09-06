import React, { useState } from 'react'

function Component2() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h2>Component 2</h2>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click, increase</button>
    </div>
  )
}

export default Component2