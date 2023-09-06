import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const User = () => {
  return (
    <div className='p-4'>
        <p>User</p>
        <div className='d-flex flex-column gap-3'>
            <div className='d-flex gap-3'>
                <button className='btn btn-outline-dark'>
                    <Link to='orders'>orders</Link>
                </button>
                <button className='btn btn-outline-dark'>
                    <Link to='profile'>profile</Link>
                </button>
            </div>
            <Outlet />
        </div>
    </div>
  )
}

export default User;