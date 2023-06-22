import React, { useState, memo } from "react";

const MyComponent = memo(({ count }) => {
    return (
        <div className="MyComponent">
            The current count is: {count}
        </div>
    );
});

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <MyComponent count={count} />
            <button onClick={() => setCount(count + 1)}>
                Increment count
            </button>
        </div>
    );
};

export default App;
