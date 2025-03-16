import React, { useState } from 'react';

function Counter() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isWorker, setStatus] = useState(false);

    const updateName = () => {
        setName("Joan");
    }
    const updateAge = () => {
        setAge(21);
    }
    const updateStatus = () => {
        setStatus(!isWorker);
    }

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Name</button>
        <p>Has a work?: {isWorker ? "Yes":"No"}</p>
        <button onClick={updateStatus}>Set Name</button>
    </div>
    );
}

export default Counter;