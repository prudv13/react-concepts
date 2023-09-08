import React, { useState } from 'react'
import Parent from './Parent';
import AppContext from './context/AppContext';

const ContextApi = () => {
    const [userName, setUserName] = useState("Dave");
  return (
    <AppContext.Provider value={{userName, setUserName}}>
        <div>
            <Parent />
        </div>
    </AppContext.Provider>
  )
}

export default ContextApi;