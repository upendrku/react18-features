import React, { useState, useSyncExternalStore } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const store = {
        count: 0,
        incrementCount: () => {
            store.count++;
        },
    };

    const data = useSyncExternalStore(store.subscribe, store.getSnapshot);

    const handleClick = () => {
        store.incrementCount();
    };

    return (
        <div className="App">
            <h1>UseSyncExternalStore example</h1>
            <p>
                The current count is: {count}
            </p>
            <button onClick={handleClick}>Click me</button>
            <p>
                The data from the external store is: {data}
            </p>
        </div>
    );
};

export default App;
