import React, { useState } from 'react'
import '/home/bhumilodhari/Documents/testing/react-test/src/Components/Counter.css'

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    const addToCounter = () => {
        setCounterValue(counterValue + inputValue);
    }

    const subToCounter = () => {
        setCounterValue(counterValue - inputValue);
    }

    return (
        <div>
            <h3 data-testid='header' >My Counter</h3>
            <h2
                data-testid='counter'
                // style={counterValue >= 100 ? { color: "green" } : (counterValue <= -100 ? { color: "red" } : {})}
                className={`
            ${counterValue >= 100 ? "green" : ""}
            ${counterValue <= -100 ? "red" : ""}`}
            >{counterValue}</h2>
            <button
                data-testid='sub-btn'
                onClick={subToCounter}
            >-</button>
            <input
                data-testid='input'
                type='number'
                value={inputValue}
                className="text-center"
                onChange={(e) => {
                    setInputValue(parseInt(e.target.value));
                }}
            />
            <button
                data-testid='add-btn'
                onClick={addToCounter}
            >+</button>
        </div>
    )
}

export default Counter