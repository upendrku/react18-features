import React, { hydrateRoot } from "react-dom/client";

const App = () => {
    return (
        <div className="App">
            This is the rendered content.
        </div>
    );
};

const root = hydrateRoot(document.getElementById("root"), <App />);
