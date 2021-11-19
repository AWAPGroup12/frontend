import React from 'react'
import './CheckoutAndInfo.css';

function Checkout() {
    return (
      <div className="Checkout">
        <wrapper>
        <h1>Cart contents</h1>
        <button>CHECKOUT</button>
        <button>+</button>
        <button>-</button>
        <button>Remove</button>
        </wrapper>
      </div>
    )
  }
  
  export default Checkout