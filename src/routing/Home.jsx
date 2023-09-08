import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='p-4'>
        <p className='text-center mb-4'>React Concepts</p>
        <div className='mb-5 d-flex gap-4 flex-wrap justify-content-center'>
          <Link to="contextapi">
            <button className='btn btn-outline-dark'>Context Api</button>
          </Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Home;