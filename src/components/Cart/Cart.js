import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleToRemove }) => {
       let command;
       if(cart.length=== 0){
              command = <div>
                     <h4>Ohh kipta, khroch kor</h4>
                     <p>Kichu kinosna kn??</p>
              </div>
       }
       else if(cart.length === 1){
              command = <p>Add more items</p>
       }
       else{
              command =<p>thanks for adding items</p>
       }
       return (
              <div>
                     <h1>This is Cart Components</h1>
                     {command}
                     {
                            cart.map(tShirt => <p>
                                   {tShirt.name}
                                   <button onClick={() => handleToRemove(tShirt)}>x</button>
                            </p>)
                     }
              </div>
       );
};

export default Cart;