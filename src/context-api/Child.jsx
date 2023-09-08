import React from 'react'
import GrandChild from './GrandChild';

const Child = ({setUserName}) => {
  return (
    <div>
        <GrandChild setUserName={setUserName} />
    </div>
  )
}

export default Child;