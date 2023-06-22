import React, { useRef } from 'react';

const App = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div className="App">
            <h1>Input Focus Example</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
};

export default App;
