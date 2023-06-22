import React, { useReducer } from 'react';

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const App = () => {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    const incrementCount = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrementCount = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div className="App">
            <h1>Counter</h1>
            <p>Count: {state.count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
};

export default App;
