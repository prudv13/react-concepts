import React, { useRef } from 'react'

const ChangeName = () => {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus()
        console.log(inputRef.current.value);
        inputRef.current.value = "";
    }
    
  return (
    <div>
        <h1>Name</h1>
        <div className='d-flex'>
            <input 
            type='text' 
            className='form-control'
            placeholder='enter the name'
            ref={inputRef}
            />
            <button 
                className='btn btn-dark'
                onClick={onClick}
            >change name</button>
        </div>
    </div>
  )
}

export default ChangeName;