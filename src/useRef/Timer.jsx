import React, { useRef, useState } from 'react'

const Timer = () => {
    const [randomInput, setRandomInput] = useState('');
    const [seconds, setSeconds] = useState(0);

    const renders = useRef(0);
    const timerId = useRef();

    const handleChange = (e) => {
        setRandomInput(e.target.value);
        renders.current++;
    }

    const startTimer = () => {
        timerId.current = setInterval(() => {
            renders.current++;
            setSeconds(prev => prev+1);
        }, 1000);
    }

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = 0;
    }

    const resetTimer = () => {
        stopTimer();
        if(seconds){
            renders.current++;
            setSeconds(0);
        }
    }

  return (
    <div>
        <input 
            type='text'
            value={randomInput}
            placeholder='Random Input'
            className='form-control'
            onChange={handleChange}
        />
        <br />
        <p>Renders: {renders.current}</p>
        <br />

        <div className='d-flex gap-2'>
            <button onClick={startTimer} className='btn btn-outline-primary'>start</button>
            <button onClick={resetTimer} className='btn btn-dark'>reset</button>
            <button onClick={stopTimer} className='btn btn-outline-danger'>stop</button>
        </div>

        <br />
        <p className='m-2'>Time in seconds : {seconds}</p>

        <br />
        <p className='m-2'>{randomInput}</p>
    </div>
  )
}

export default Timer;