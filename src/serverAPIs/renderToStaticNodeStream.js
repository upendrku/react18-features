import React, { renderToStaticNodeStream } from "react-dom/server";

const App = () => {
    return (
        <div className="App">
            This is the rendered content.
        </div>
    );
};

const stream = renderToStaticNodeStream(<App />);
stream.pipe(process.stdout);
