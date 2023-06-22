import React, { renderToReadableStream } from "react-dom/server";

const App = () => {
    return (
        <div className="App">
            This is the rendered content.
        </div>
    );
};

const stream = renderToReadableStream(<App />);
const reader = stream.getReader();

while (true) {
    const chunk = reader.read();
    if (chunk === null) {
        break;
    }
    console.log(chunk);
}
