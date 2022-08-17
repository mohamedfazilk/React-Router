import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav className='navbar'>
          <NavLink to='/'>Home</NavLink> 
          <NavLink to='/about'>About</NavLink> 
          <NavLink to='/products'>Product</NavLink> 
          

      </nav>
 
  )
}

export default Navbar