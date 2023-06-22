import React, { renderToString } from "react-dom/server";

const App = () => {
    return (
        <div className="App">
            This is the rendered content.
        </div>
    );
};

const html = renderToString(<App />);
console.log(html);
