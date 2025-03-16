import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    //Update the count state using a function
    function increment() {
        setCount(c => c + 1);
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Restart</button>
        </div>
    );
}

export default Counter;