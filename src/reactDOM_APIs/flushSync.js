import React, { useState, flushSync } from "react";

const App = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        flushSync(() => {
            setCount(count + 1);
        });
    };

    return (
        <div className="App">
            The current count is: {count}
            <button onClick={handleClick}>
                Increment count synchronously
            </button>
        </div>
    );
};

export default App;
