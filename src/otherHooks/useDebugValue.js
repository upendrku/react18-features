import React, { useState, useDebugValue } from "react";

const App = () => {
    const [value, setValue] = useState(0);

    useDebugValue(value, {
        name: "My custom value",
        label: "The current value is:",
    });

    return (
        <div className="App">
            <h1>UseDebugValue example</h1>
            <p>
                The current value is: {value}
            </p>
        </div>
    );
};

export default App;
