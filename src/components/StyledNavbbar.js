import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
      <nav className='navbar'>
          <NavLink to='/' style={({isActive})=>{
              return {color:isActive?'red':'grey'}
          }}>Home</NavLink> 
          <NavLink to='/about'>About</NavLink> 
          <NavLink to='/products'>Product</NavLink> 
          <NavLink to='/login'>Login</NavLink> 
          <NavLink to='/dasboard'>Dashboard</NavLink> 

      </nav>
 
  )
}

export default Navbar