import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="App">
            <h1>Suspense example</h1>
            <Suspense fallback={<p>Loading...</p>}>
                {isLoaded && <p>This is the loaded content.</p>}
            </Suspense>
        </div>
    );
};

export default App;

/* 
    Suspense is a component that will wait for a promise to resolve before rendering.
    React includes under-the-hood optimizations like Streaming Server Rendering and Selective Hydration that are integrated with Suspense.    
*/
