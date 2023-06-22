import React, { useState, startTransition } from "react";

const MyComponent = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        startTransition(() => {
            setCount(count + 1);
        });
    };

    return (
        <div className="MyComponent">
            The current count is: {count}
            <button onClick={handleClick}>
                Increment count
            </button>
        </div>
    );
};

export default MyComponent;
