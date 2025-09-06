import React, { useState, useCallback, useEffect } from 'react'

//child component
const Child = React.memo(({onClick}) => {
    console.log('👶 Child rendered');
    return <button onClick={onClick} className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition'>Click Child</button>;
});

function Page5() {
    const [count, setCount] = useState(0);

    //function is memoized; will not re-create unless deps change
    const handleClick = useCallback(() => {
        console.log('Child button clicked');
    }, []);

    //function is not memoized; will re-create on every render
    // const handleClick = () => {
    //     console.log('Child button clicked');
    // };

    useEffect(() => {
        console.log('Effect ran due to handleClick change');
    }, [handleClick]);


  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4'>
        <h1 className='text-2xl font-bold text-gray-800'>Testing useCallback without React.memo</h1>
        <p className='text-lg text-gray-700'>Count: {count}</p>
        <div className='space-x-4'>
            <button
                onClick={() => setCount(count + 1)}
                className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
            >
                Increment
            </button>
            <Child onClick={handleClick} />
        </div>
    </div>
  )
}

export default Page5
