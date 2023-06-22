import React from "react";
import { useId } from "react";

const App = () => {
    const id = useId();

    return (
        <div className="App">
            <h1>UseId example</h1>
            <p>
                The id is: {id}
            </p>
        </div>
    );
};

export default App;
