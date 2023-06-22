import React, { useState } from "react";
import ReactDOM from "react-dom";
import Profiler from "react-profiler";

const App = () => {
    const [value, setValue] = useState(0);

    return (
        <div className="App">
            <Profiler id="my-profiler" onRender={(commits) => {
                console.log(commits);
            }}>
                <h1>Profiler example</h1>
                <p>The current value is: {value}</p>
                <button onClick={() => setValue(value + 1)}>
                    Increase value
                </button>
            </Profiler>
        </div>
    );
};

export default App;
