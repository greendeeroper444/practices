import React, { useState, useMemo } from 'react'

function ExpensiveCalculation(num) {
    console.log('Running expensive calculation...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        result += num;
    }
    return result;
}

function Page4() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    //only recalculates when the dependency changes
    const result = useMemo(() => ExpensiveCalculation(5), []);

    //expensive calculation runs every render!
    //  const result = ExpensiveCalculation(5);

  return (
   <div className='p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4'>
        <h1 className='text-2xl font-bold text-gray-800'>With useMemo</h1>
        <p className='text-lg text-gray-700'>Expensive Result: {result}</p>

        <button
            onClick={() => setCount(count + 1)}
            className='w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        >
            Increment Count: {count}
        </button>

        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type something'
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
    </div>

  )
}

export default Page4
