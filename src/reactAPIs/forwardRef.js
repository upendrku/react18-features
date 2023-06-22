import React, { forwardRef } from "react";

const MyComponent = forwardRef((props, ref) => {
    return (
        <div className="MyComponent" ref={ref}>
            This is a forwarded ref component.
        </div>
    );
});

const App = () => {
    const ref = React.createRef();

    return (
        <MyComponent ref={ref} />
    );
};

export default App;
