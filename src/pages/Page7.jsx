import React, { useState, useCallback } from 'react'
import Child from '../components/Child';

function Page7() {
    const [dataFromChild, setDataFromChild] = useState('');

    const handleData = useCallback((value) => {
        setDataFromChild(value);
        console.log('Data received from child:', value);
    }, []);

  return (
    <div>
        <h2>Page7</h2>
        <p>Data from child: {dataFromChild}</p>
        <Child onDataChange={handleData} />
    </div>
  )
}

export default Page7