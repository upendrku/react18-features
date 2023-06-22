import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomButton = forwardRef((props, ref) => {
    const buttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            buttonRef.current.focus();
        },
        disable: () => {
            buttonRef.current.disabled = true;
        },
        enable: () => {
            buttonRef.current.disabled = false;
        }
    }));

    return <button ref={buttonRef}>{props.children}</button>;
});

const App = () => {
    const customButtonRef = useRef(null);

    const handleFocusClick = () => {
        customButtonRef.current.focus();
    };

    const handleDisableClick = () => {
        customButtonRef.current.disable();
    };

    const handleEnableClick = () => {
        customButtonRef.current.enable();
    };

    return (
        <div className="App">
            <h1>Custom Button</h1>
            <CustomButton ref={customButtonRef}>Click me!</CustomButton>
            <button onClick={handleFocusClick}>Focus Button</button>
            <button onClick={handleDisableClick}>Disable Button</button>
            <button onClick={handleEnableClick}>Enable Button</button>
        </div>
    );
};

export default App;
