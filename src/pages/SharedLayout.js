import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyledNavbar from '../components/StyledNavbbar'

const Home = () => {
    return (
        <>
        <StyledNavbar/>
          <Outlet/>
  
     
        </>
       

    )
}

export default Home