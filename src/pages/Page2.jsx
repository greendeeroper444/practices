import React, { useCallback, useState } from 'react';
import UseCallbackChild from '../components/UseCallbackChild';

function Page2() {
    const [count, setCount] = useState(0);

    const handleClickWithUseCallBack = useCallback(() => {
        console.log('Clicked with useCallback');
    }, []);

    const handleClickWithoutUseCallBack = () => {
        console.log('Clicked without useCallback');
    };

  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Re-render Parent</button>

        <h3>With useCallback (Child Should Not Re-render)</h3>
        <UseCallbackChild onClick={handleClickWithUseCallBack} />

        <h3>Without useCallback (Child Will Re-render)</h3>
        <UseCallbackChild onClick={handleClickWithoutUseCallBack} />
    </div>
  )
}

export default Page2
