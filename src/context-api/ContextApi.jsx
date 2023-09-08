import React, { useState } from 'react'
import Parent from './Parent';

const ContextApi = () => {
    const [userName, setUserName] = useState("Dave");
  return (
    <div>
        <Parent userName={userName} setUserName={setUserName} />
    </div>
  )
}

export default ContextApi;