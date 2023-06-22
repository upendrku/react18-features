import React, { useState, useLayoutEffect } from 'react';

const App = () => {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Attach the event listener when the component mounts
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div className="App">
            <h1>Window Width: {width}px</h1>
        </div>
    );
};

export default App;
