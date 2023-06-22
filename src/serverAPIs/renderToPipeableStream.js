import React, { renderToPipeableStream } from "react-dom/server";

const App = () => {
    return (
        <div className="App">
            This is the rendered content.
        </div>
    );
};

const stream = renderToPipeableStream(<App />);
stream.pipe(process.stdout);
