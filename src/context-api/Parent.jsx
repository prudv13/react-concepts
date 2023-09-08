import React from 'react'
import Child from './Child';

const Parent = ({userName, setUserName}) => {
  return (
    <div>
    <h1>Username: {userName}</h1>
        <Child setUserName={setUserName} />
    </div>
  )
}

export default Parent;