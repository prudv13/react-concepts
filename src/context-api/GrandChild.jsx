import React, { useContext } from 'react'
import AppContext from './context/AppContext';

const GrandChild = () => {
    const {userName, setUserName} = useContext(AppContext);
  return (
    <div>
        <button 
            className='btn btn-dark' 
            onClick={() => 
                setUserName(
                    userName === "Pedro" ? "Dave" 
                    : userName === "Dave" ? "Pedro"
                    : "Dave"
                    )
            }>
            change username
        </button>
    </div>
  )
}

export default GrandChild;