import React, { useRef } from 'react'
import Child from './Child';

const ImperativeHandle = () => {
    const buttonRef = useRef();
  return (
    <div className='d-flex flex-column gap-3'>
        <button onClick={() => {buttonRef.current.alterToggle()}} className='btn btn-info'>Button From Parent</button>
        <Child ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandle;