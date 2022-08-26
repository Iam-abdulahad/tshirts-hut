import React, { useState } from 'react';
import useTShirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
       const [TShirts, setTShirts] = useTShirts();
       const [cart, setCart] = useState([]);

       const handleAddToCart = (selectedItem) => {
              const newCart = [...cart, selectedItem];
              setCart(newCart);
       }

       const handleToRemove = (selectedItem) => {
              
       }
       return (
              <div className='home-container'>
                     <div className='tshirt-container'>
                            {
                                   TShirts.map(tShirt => <TShirt
                                          key={tShirt._id}
                                          tShirt={tShirt}
                                          handleAddToCart={handleAddToCart}
                                   ></TShirt>)
                            }
                     </div>
                     <div className='cart-container'>
                            <Cart
                                   handleToRemove={handleToRemove}
                                   cart={cart}>

                            </Cart>
                     </div>
              </div>
       );
};

export default Home; 