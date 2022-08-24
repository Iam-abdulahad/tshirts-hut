import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
       return (
              <div className='header-section'>
                     <div className='site-name'>
                            <h2>T-Shirt Hut</h2>
                     </div>
                     <nav className='header-nav'>
                            <Link to="/home">Home</Link>
                            <Link to="/dashbord">Dashbord</Link>
                     </nav>
              </div>
       );
};

export default Header;