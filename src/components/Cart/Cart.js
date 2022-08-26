import React from 'react';
import './Cart.css'

const Cart = ({cart, handleToRemove}) => {
       return (
              <div>
                     <h1>This is Cart Components</h1>
                     {
                            cart.map(tShirt=> <p>{tShirt.name}
                            <button onClick={() => handleToRemove(tShirt)}>x</button>
                            </p>)
                     }
              </div>
       );
};

export default Cart;