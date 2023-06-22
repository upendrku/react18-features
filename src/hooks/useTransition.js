import React, { useState, useTransition } from 'react';

const App = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [startTransition, isPending] = useTransition({ timeoutMs: 3000 });

    const handleClick = () => {
        startTransition(() => {
            setIsShowing(!isShowing);
        });
    };

    return (
        <div className="App">
            <button onClick={handleClick} disabled={isPending}>
                Toggle Component
            </button>
            {isShowing && <SomeComponent />}
        </div>
    );
};

const SomeComponent = () => {
    return (
        <div>
            <h1>Some Component</h1>
            <p>This is a dynamic component that can be toggled using a transition.</p>
        </div>
    );
};

export default App;
