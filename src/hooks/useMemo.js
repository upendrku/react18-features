import React, { useState, useMemo } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useMemo(() => {
        console.log('Performing expensive calculation...');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i;
        }
        return result;
    }, []);

    return (
        <div className="App">
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Expensive Calculation: {expensiveCalculation}</p>
        </div>
    );
};

export default App;
