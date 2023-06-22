import React, { lazy } from "react";

const MyComponent = lazy(() => import("./MyComponent"));

const App = () => {
    return (
        <div className="App">
            <MyComponent />
        </div>
    );
};

export default App;
