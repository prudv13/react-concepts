import React, { Fragment, forwardRef, useImperativeHandle, useState } from 'react'

const Child = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        }
    }))
    
  return (
    <Fragment>
        <button 
            className='btn btn-warning'
        >
        Button From Child
        </button>
        {toggle && <span>Toggle</span>}
    </Fragment>
  )
})

export default Child;