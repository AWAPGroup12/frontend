import React from 'react'
import './CheckoutAndInfo.css';

function Checkout() {
    return (
      <div className="Checkout">
        <wrapper>
            <h1>Cart contents</h1>
            <h2>
                <button>+</button>
                <button>-</button>
                <button>Remove</button>
            </h2>
            <h3>
                <button>CHECKOUT</button>
            </h3>
        </wrapper>
      </div>
    )
  }
  
  export default Checkout

  