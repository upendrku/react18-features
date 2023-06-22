import React, { createElement } from "react";

const App = () => {
    const element = createElement("div", {
        className: "App",
    }, "This is a component created using createElement");

    return element;
};

export default App;
