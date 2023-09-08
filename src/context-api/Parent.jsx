import React, { useContext } from 'react'
import Child from './Child';
import AppContext from './context/AppContext';

const Parent = () => {
    const {userName} = useContext(AppContext);
  return (
    <div>
        <h1>Username : {userName}</h1>
        <Child />
    </div>
  )
}

export default Parent;