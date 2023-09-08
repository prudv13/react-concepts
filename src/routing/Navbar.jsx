import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className='d-flex justify-content-between p-2'>
            <div>
                <Link to='/'><button className='btn'>Home</button></Link>
            </div>
            <div className='d-flex gap-1'>
                <Link to='/about'><button className='btn'>About</button></Link>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
                <Link to='/user'><button className='btn'>User</button></Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;