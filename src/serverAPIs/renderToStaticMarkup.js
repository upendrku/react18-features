import React, { renderToStaticMarkup } from "react-dom/server";

const App = () => {
    return (
        <div className="App">
            This is the rendered content.
        </div>
    );
};

const markup = renderToStaticMarkup(<App />);
console.log(markup);
