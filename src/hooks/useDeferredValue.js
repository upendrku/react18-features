
import React, { useState, useDeferredValue } from "react";

const App = () => {
    const [value, setValue] = useState(0);
    const deferredValue = useDeferredValue(value);

    const handleClick = () => {
        setValue(value + 1);
    };

    return (
        <div className="App">
            <h1>UseDeferredValue example</h1>
            <p>
                The current value is: {value}
            </p>
            <button onClick={handleClick}>Click me</button>
            <p>
                The deferred value is: {deferredValue}
            </p>
        </div>
    );
};

export default App;
