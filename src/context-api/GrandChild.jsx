import React from 'react'

const GrandChild = ({setUserName}) => {
  return (
    <div>
        <button className='btn btn-dark' onClick={() => setUserName("Pedro")}>
            change username
        </button>
    </div>
  )
}

export default GrandChild;