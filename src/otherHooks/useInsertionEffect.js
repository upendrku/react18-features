import React, { useState, useInsertionEffect } from "react";

const App = () => {
    const [value, setValue] = useState(0);

    useInsertionEffect(() => {
        // This effect will run synchronously before any DOM mutations.
        // It can be used to insert styles or other DOM nodes before the layout is calculated.
        const style = document.createElement("style");
        style.innerHTML = `
      .my-class {
        color: red;
      }
    `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className="App">
            <h1>UseInsertionEffect example</h1>
            <p>
                The current value is: {value}
            </p>
        </div>
    );
};

export default App;
