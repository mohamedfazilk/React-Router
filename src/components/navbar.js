import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
      <nav className='navbar'>
          <Link to='/'>Home</Link> 
          <Link to='/product'>About</Link> 
          <Link to='/product'>Product</Link> 
          

      </nav>
 
  )
}

export default navbar