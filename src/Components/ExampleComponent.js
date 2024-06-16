import React from 'react';
import useToggle from '../Hooks/useToggle';

const ExampleComponent = () => {
    const [isToggled, toggle] = useToggle(false)
    return (
        <div>
            <p>The value is {isToggled ? 'true' : 'false'}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};

export default ExampleComponent;