import React, { cloneElement } from "react";

const App = () => {
    const child = <div>This is the child</div>;

    return (
        <div className="App">
            {cloneElement(child, {
                style: { color: "red" },
            })}
        </div>
    );
};

export default App;
