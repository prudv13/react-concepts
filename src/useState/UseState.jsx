import React, { useState } from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const increment = () => {
        setCounter(counter+1);
    }

    const decrement = () => {
        setCounter(counter-1);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <div>
        <h1>Count: {counter}</h1>
        <div className='d-flex gap-3'>
            <button className='btn btn-dark' onClick={increment}>+</button>
            <button className='btn btn-dark' onClick={decrement}>-</button>
        </div>
        <input 
            type='text' 
            className='form-control my-4' 
            placeholder='type something...'
            onChange={handleChange}
        />
        <p>{inputValue}</p>
    </div>
  )
}

export default UseState;