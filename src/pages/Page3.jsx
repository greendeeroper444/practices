import React, { useState, useCallback, useMemo, memo } from 'react';

// Child component that shows when it re-renders
const ChildWithoutCallback = memo(({ onClick, label }) => {
    console.log(`${label} child re-rendered`);
    return (
        <div className='p-4 border rounded mb-2'>
            <h3 className='font-semibold'>{label}</h3>
            <button 
                onClick={onClick}
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            >
                Click me
            </button>
            <p className='text-sm text-gray-600 mt-2'>Check console for re-render logs</p>
        </div>
    );
});

const ChildWithCallback = memo(({ onClick, label }) => {
    console.log(`${label} child re-rendered`);
    return (
        <div className='p-4 border rounded mb-2'>
            <h3 className='font-semibold'>{label}</h3>
            <button 
                onClick={onClick}
                className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
            >
                Click me
            </button>
            <p className='text-sm text-gray-600 mt-2'>Check console for re-render logs</p>
        </div>
    );
});

// Child component that receives computed values
const ValueDisplayChild = memo(({ value, label }) => {
    console.log(`${label} value child re-rendered`);
    return (
        <div className='p-4 border rounded mb-2 bg-yellow-50'>
            <h3 className='font-semibold'>{label}</h3>
            <p className='text-lg font-bold text-yellow-800'>{value}</p>
            <p className='text-sm text-gray-600 mt-2'>Check console for re-render logs</p>
        </div>
    );
});

function Page3() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    // WITHOUT useCallback - this function is recreated on every render
    const handleClickWithoutCallback = () => {
        console.log('Button clicked without useCallback');
        alert('Clicked without useCallback!');
    };

    // WITH useCallback - this function is memoized and only recreated when dependencies change
    const handleClickWithCallback = useCallback(() => {
        console.log('Button clicked with useCallback');
        alert('Clicked with useCallback!');
    }, []); // Empty dependency array means it never changes

    // Function that depends on count - will be recreated when count changes
    const handleCountDependentClick = useCallback(() => {
        console.log(`Count is currently: ${count}`);
        alert(`Count is currently: ${count}`);
    }, [count]); // Recreated only when count changes

    // WITHOUT useMemo - expensive calculation runs on every render
    const expensiveCalculationWithoutMemo = () => {
        console.log('🔥 Expensive calculation WITHOUT useMemo - running...');
        // Simulate expensive calculation
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result + count;
    };

    // WITH useMemo - expensive calculation only runs when count changes
    const expensiveCalculationWithMemo = useMemo(() => {
        console.log('⚡ Expensive calculation WITH useMemo - running...');
        // Simulate expensive calculation
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += i;
        }
        return result + count;
    }, [count]); // Only recalculate when count changes

    // WITHOUT useMemo - array operations run on every render
    const filteredNumbersWithoutMemo = numbers.filter(num => num > 2).map(num => num * 2);

    // WITH useMemo - array operations only run when numbers array changes
    const filteredNumbersWithMemo = useMemo(() => {
        console.log('🔄 Array processing WITH useMemo - running...');
        return numbers.filter(num => num > 2).map(num => num * 2);
    }, [numbers]); // Only recalculate when numbers array changes

    // WITHOUT useMemo - object is recreated on every render
    const userDataWithoutMemo = {
        id: count,
        name: `User ${count}`,
        isActive: count > 0
    };

    // WITH useMemo - object is only recreated when count changes
    const userDataWithMemo = useMemo(() => {
        console.log('📦 Object creation WITH useMemo - running...');
        return {
            id: count,
            name: `User ${count}`,
            isActive: count > 0
        };
    }, [count]); // Only recreate when count changes

    return (
        <div className='p-6 max-w-6xl mx-auto'>
            <h1 className='text-3xl font-bold mb-6'>useCallback & useMemo Demo</h1>
            
            <div className='mb-6 p-4 bg-gray-100 rounded'>
                <h2 className='text-lg font-semibold mb-2'>Parent State</h2>
                <div className='flex gap-4 mb-4'>
                    <button 
                        onClick={() => setCount(c => c + 1)}
                        className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600'
                    >
                        Count: {count}
                    </button>
                    <button 
                        onClick={() => setOtherState(s => s + 1)}
                        className='px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600'
                    >
                        Other State: {otherState}
                    </button>
                    <button 
                        onClick={() => setNumbers(prev => [...prev, prev.length + 1])}
                        className='px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600'
                    >
                        Add Number
                    </button>
                </div>
                <p className='text-sm text-gray-600'>
                    Click these buttons to trigger parent re-renders and see the difference
                </p>
            </div>

            {/* useCallback Examples */}
            <div className='mb-8'>
                <h2 className='text-2xl font-bold mb-4 text-blue-800'>useCallback Examples (Memoizing Functions)</h2>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                        <h3 className='text-lg font-semibold mb-4 text-red-600'>Without useCallback</h3>
                        <ChildWithoutCallback 
                            onClick={handleClickWithoutCallback}
                            label='Without useCallback'
                        />
                        <p className='text-sm text-gray-600 mb-4'>
                            This child re-renders every time the parent re-renders because the onClick function 
                            is recreated each time, causing memo() to think the props changed.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold mb-4 text-green-600'>With useCallback</h3>
                        <ChildWithCallback 
                            onClick={handleClickWithCallback}
                            label='With useCallback'
                        />
                        <p className='text-sm text-gray-600 mb-4'>
                            This child only re-renders when its props actually change because useCallback 
                            prevents the function from being recreated unnecessarily.
                        </p>
                    </div>
                </div>

                <div className='mt-6'>
                    <h3 className='text-lg font-semibold mb-4 text-blue-600'>With useCallback + Dependencies</h3>
                    <ChildWithCallback 
                        onClick={handleCountDependentClick}
                        label='With useCallback (depends on count)'
                    />
                    <p className='text-sm text-gray-600'>
                        This child re-renders when the count changes because the useCallback function 
                        depends on the count value, but it won't re-render when otherState changes.
                    </p>
                </div>
            </div>

            {/* useMemo Examples */}
            <div className='mb-8'>
                <h2 className='text-2xl font-bold mb-4 text-green-800'>useMemo Examples (Memoizing Values)</h2>
                
                {/* Expensive Calculation Example */}
                <div className='mb-6'>
                    <h3 className='text-lg font-semibold mb-4 text-purple-600'>Expensive Calculations</h3>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <ValueDisplayChild 
                            value={expensiveCalculationWithoutMemo()}
                            label='Without useMemo (runs every render)'
                        />
                        <ValueDisplayChild 
                            value={expensiveCalculationWithMemo}
                            label='With useMemo (runs only when count changes)'
                        />
                    </div>
                    <p className='text-sm text-gray-600 mt-2'>
                        Click "Other State" - notice the expensive calculation WITHOUT useMemo runs every time, 
                        but WITH useMemo only runs when count changes.
                    </p>
                </div>

                {/* Array Processing Example */}
                <div className='mb-6'>
                    <h3 className='text-lg font-semibold mb-4 text-teal-600'>Array Processing</h3>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <ValueDisplayChild 
                            value={`[${filteredNumbersWithoutMemo.join(', ')}]`}
                            label='Without useMemo (processes every render)'
                        />
                        <ValueDisplayChild 
                            value={`[${filteredNumbersWithMemo.join(', ')}]`}
                            label='With useMemo (processes only when numbers change)'
                        />
                    </div>
                    <p className='text-sm text-gray-600 mt-2'>
                        Current numbers: [{numbers.join(', ')}]. Click "Add Number" to see the difference.
                    </p>
                </div>

                {/* Object Creation Example */}
                <div className='mb-6'>
                    <h3 className='text-lg font-semibold mb-4 text-pink-600'>Object Creation</h3>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <ValueDisplayChild 
                            value={JSON.stringify(userDataWithoutMemo, null, 2)}
                            label='Without useMemo (creates new object every render)'
                        />
                        <ValueDisplayChild 
                            value={JSON.stringify(userDataWithMemo, null, 2)}
                            label='With useMemo (creates object only when count changes)'
                        />
                    </div>
                    <p className='text-sm text-gray-600 mt-2'>
                        Objects look the same but are different references without useMemo.
                    </p>
                </div>
            </div>

            <div className='mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded'>
                <h3 className='font-semibold mb-2'>How to test:</h3>
                <ol className='list-decimal list-inside space-y-1 text-sm'>
                    <li>Open the browser console to see re-render and computation logs</li>
                    <li>Click 'Other State' button - notice:</li>
                    <ul className='list-disc list-inside ml-4 mt-1 space-y-1'>
                        <li>useCallback: Only "Without useCallback" child re-renders</li>
                        <li>useMemo: Expensive calculation WITHOUT useMemo runs, but WITH useMemo doesn't</li>
                    </ul>
                    <li>Click 'Count' button - notice both useCallback and useMemo dependencies trigger</li>
                    <li>Click 'Add Number' button - notice array processing with useMemo runs</li>
                    <li>Click the child buttons to see the actual functionality</li>
                </ol>
            </div>

            <div className='mt-4 p-4 bg-blue-50 border border-blue-200 rounded'>
                <h3 className='font-semibold mb-2'>Key Differences:</h3>
                <ul className='list-disc list-inside space-y-1 text-sm'>
                    <li><strong>useCallback:</strong> Memoizes functions to prevent child re-renders</li>
                    <li><strong>useMemo:</strong> Memoizes values/calculations to prevent expensive computations</li>
                    <li><strong>Both:</strong> Only recalculate when dependencies change</li>
                    <li><strong>Performance:</strong> Use sparingly - only when actually needed!</li>
                </ul>
            </div>
        </div>
    )
}

export default Page3