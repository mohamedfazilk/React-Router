import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<div>Home page</div>}/>    
        <Route path='testing' element={<div><h2>testing page</h2></div>}/>    
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
