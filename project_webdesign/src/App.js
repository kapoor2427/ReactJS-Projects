import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Sidenav from './Components/Sidenav';
import Product from './Components/ProductCard';

class App extends React.Component 
{
  render()
  {
    return (
      <div>
        <Navbar/>
        <Sidenav/>
        <div className="gridContainer">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    );
  }
}

export default App;
