import React, { createRoot } from "react-dom/client";

const App = () => {
    return (
        <div className="App">
            This is the rendered content.
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
