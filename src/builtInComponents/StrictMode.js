import React from "react";

const App = () => {
    return (
        <div className="App">
            <h1>StrictMode example</h1>
            <StrictMode>
                <p>This is a safe component.</p>
            </StrictMode>
        </div>
    );
};

export default App;

/* 
Strict Mode enables the following development-only behaviors:
    * Your components will re-render an extra time to find bugs caused by impure rendering.
    * Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
    * Your components will be checked for usage of deprecated APIs.

If a function is pure, running it twice does not change its behavior because a pure function produces the same result every time. 
However, if a function is impure (for example, it mutates the data it receives), running it twice tends to be noticeable 
(that’s what makes it impure!) This helps you spot and fix the bug early.
*/