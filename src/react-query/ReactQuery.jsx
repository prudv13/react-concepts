import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ReactQuery = () => {
  return (
    <div className='d-flex gap-4 flex-column align-items-center'>
      <div className='d-flex gap-3 justify-content-center'>
        <Link to='superheroes'><button className='btn btn-dark'>Super Heroes</button></Link>
        <Link to='rqsuperheroes'><button className='btn btn-dark'>RQ Super Heroes</button></Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default ReactQuery;