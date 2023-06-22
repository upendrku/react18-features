import React, { useState } from "react";

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return {
        count,
        incrementCount,
        decrementCount,
    };
};

const App = () => {
    const { count, incrementCount, decrementCount } = useCounter();

    return (
        <div className="App">
            <h1>Custom Hook example</h1>
            <p>
                The current count is: {count}
            </p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
};

export default App;
