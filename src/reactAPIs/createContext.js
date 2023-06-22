import React, { createContext } from "react";

const MyContext = createContext(null);

const App = () => {
    const [value, setValue] = useState("Initial value");

    return (
        <div className="App">
            <MyContext.Provider value={value}>
                <MyContext.Consumer>
                    {value => <p>The current value is {value}</p>}
                </MyContext.Consumer>
            </MyContext.Provider>
        </div>
    );
};

export default App;
