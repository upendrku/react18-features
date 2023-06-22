import React, { Children } from "react";

const App = () => {
    return (
        <div className="App">
            {Children.map((child, index) => (
                <div key={index}>{child}</div>
            ))}
        </div>
    );
};

export default App;
