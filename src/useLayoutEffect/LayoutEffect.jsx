import React, { useEffect, useLayoutEffect, useRef } from 'react'

const LayoutEffect = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.value = "Hello";
    },[]);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    },[]);

  return (
    <div>
        <input 
            type='text' 
            className='form-control' 
            placeholder='type something...'
            ref={inputRef}
            value="pedro"
        />
    </div>
  )
}

export default LayoutEffect;