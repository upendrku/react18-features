import React, { isValidElement } from "react";

const App = () => {
    const element = <div>This is a valid element</div>;
    const notElement = "This is not a valid element";

    console.log(isValidElement(element)); // true
    console.log(isValidElement(notElement)); // false

    return null;
};

export default App;
