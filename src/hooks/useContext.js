import React, { createContext, useContext } from 'react';

// Create a context
const AppContext = createContext();

// Component using the context
const ChildComponent = () => {
    const appContext = useContext(AppContext);
    return <h2>Hello, {appContext.name}!</h2>;
};

const App = () => {
    const appData = {
        name: 'John',
    };

    return (
        <div className="App">
            <h1>Parent Component</h1>
            <AppContext.Provider value={appData}>
                <ChildComponent />
            </AppContext.Provider>
        </div>
    );
};

export default App;
