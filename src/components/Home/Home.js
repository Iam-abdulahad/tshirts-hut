import React, { useState } from 'react';
import useTShirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
       const [TShirts, setTShirts] = useTShirts();
       const [cart, setCart] = useState([]);

       const handleAddToCart = (selectedItem) => {
              const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
              if(!exists) {
                     const newCart = [...cart, selectedItem];
                     setCart(newCart);
              }
              else{
                     alert('Item already added!');
              }
              
       }

       const handleToRemove = (selectedItem) => {
              const rest =cart.filter(tShirt => tShirt._id !== selectedItem._id);
              setCart(rest);
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