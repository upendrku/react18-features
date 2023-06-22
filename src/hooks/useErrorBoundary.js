import React, { useErrorBoundary, useState } from "react";

const App = () => {
    const [error, setError] = useState(null);

    const handleError = (error) => {
        setError(error);
    };

    return (
        <ErrorBoundary>
            <div>
                <h1>This is my app</h1>
                <button onClick={() => { throw new Error("Something went wrong") }}>
                    Click me to trigger an error
                </button>
                {error && <p>Something went wrong: {error.message}</p>}
            </div>
        </ErrorBoundary>
    );
};

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = useState(false);

    const errorBoundary = useErrorBoundary(
        (error) => {
            setHasError(true);
        },
        {
            fallback: () => <h1>Something went wrong</h1>,
        },
    );

    return (
        <div>
            {errorBoundary(children)}
            {hasError && <p>There was an error</p>}
        </div>
    );
};

export default App;
