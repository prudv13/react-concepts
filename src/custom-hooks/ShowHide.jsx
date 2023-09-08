import React from 'react'
import useToggle from './useToggle';

const ShowHide = () => {
    const [isVisible, toggle] = useToggle();
  return (
    <div>
        <button
            className='btn btn-dark mb-3'
            onClick={toggle}
        >
            {isVisible ? "Hide" : "Show"}
        </button>
        {isVisible && <h4>Hidden Text</h4>}
    </div>
  )
}

export default ShowHide;