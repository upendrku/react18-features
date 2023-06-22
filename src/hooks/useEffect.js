import React, { useEffect, useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component did mount');

        return () => {
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        console.log('Count updated:', count);
    }, [count]);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div className='App'>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
};

export default App;
