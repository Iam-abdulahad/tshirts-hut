import React from 'react';
import useTShirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
       const [TShirts, setTShirts] =useTShirts();
       return (
              <div className='home-container'>
                     <div className='tshirt-container'>
                           {
                            TShirts.map(tShirt => <TShirt
                            key={tShirt._id}
                            tShirt={tShirt}
                            ></TShirt>)
                           }
                     </div>
                     <div className='cart-container'>
                            <Cart></Cart>
                     </div>
              </div>
       );
};

export default Home;