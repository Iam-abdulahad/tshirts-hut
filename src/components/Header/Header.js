import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
       return (
              <div>
                     <h2>Tshirt Hut</h2>
                     <nav>
                            <Link to="/home">Home</Link>
                            <Link to="/dashbord">Dashbord</Link>
                     </nav>
              </div>
       );
};

export default Header;