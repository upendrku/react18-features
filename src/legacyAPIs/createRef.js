import React, { createRef } from "react";

const App = () => {
    const ref = createRef();

    return (
        <div className="App">
            <p ref={ref}>This is a ref.</p>
        </div>
    );
};

export default App;
