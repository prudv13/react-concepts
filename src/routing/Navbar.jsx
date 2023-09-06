import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className='d-flex justify-content-between p-2'>
            <div>
                <p><Link to='/'>Home</Link></p>
            </div>
            <div className='d-flex gap-4'>
                <p><Link to='/about'>About</Link></p>
                <p><Link to='/contact'>Contact</Link></p>
                <p><Link to='/user'>User</Link></p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;