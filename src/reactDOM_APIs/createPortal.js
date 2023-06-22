import React, { createPortal } from "react";

const App = () => {
    return (
        <div className="App">
            <div>This is the parent component.</div>
            <div>
                This child component will be rendered in a different part of the DOM tree.
                {createPortal(
                    <p>This is the portaled child component.</p>
                    , document.body
                )}
            </div>
        </div>
    );
};

export default App;
