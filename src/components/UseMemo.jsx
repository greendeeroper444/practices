import { useState } from "react";
import toast from "react-hot-toast";

const expensiveCalculation = (num) => {
    toast.success('Calculating...');
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
        result += num * Math.random();
    }
    return result;
};

function UseMemo() {
  const [count, setCount] = useState(0);
  const result = expensiveCalculation(count); // re-runs every time

  return (
    <div>
        <h1>{result}</h1>
        <button onClick={() => setCount(c => c + 1)}>Recalculate</button>
    </div>
  )
}

export default UseMemo
