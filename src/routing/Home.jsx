import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className='p-4'>
        <p className='text-center mb-4'>React Concepts</p>
        <div className='mb-5 d-flex gap-4 flex-wrap justify-content-center'>
          <Link to="usestate">
            <button className='btn btn-outline-dark'>useState</button>
          </Link>
          <Link to="useeffect">
            <button className='btn btn-outline-dark'>useEffect</button>
          </Link>
          <Link to="usereducer">
            <button className='btn btn-outline-dark'>useReducer</button>
          </Link>
          <Link to="contextapi">
            <button className='btn btn-outline-dark'>Context Api</button>
          </Link>
          <Link to="useref">
            <button className='btn btn-outline-dark'>useRef</button>
          </Link>
          <Link to="customhooks">
            <button className='btn btn-outline-dark'>custom hooks</button>
          </Link>
          <Link to="reactquery">
            <button className='btn btn-outline-dark'>React Query</button>
          </Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Home;