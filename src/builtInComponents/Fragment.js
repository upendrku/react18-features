import React from "react";

const App = () => {
    return (
        <div className="App">
            <h1>Fragment example</h1>
            <Fragment key="someId">
                <p>This is the first child element.</p>
                <p>This is the second child element.</p>
            </Fragment>
        </div>
    );
};

export default App;
