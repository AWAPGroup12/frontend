import React from 'react'
import './CheckoutAndInfo.css';

function Info() {
    return (
      <div className="Info">
        <wrapper>
        <h1>Delivery info</h1>
        <div>
        <input className="CustomerName" type="text" placeholder="Enter name"></input>
        </div>
        <div>
        <input className="CustomerAddress" type="text" placeholder="Enter address"></input>
        </div>
        <div>
        <input className="CustomerNumber" type="text" placeholder="Enter phonenumber"></input>
        </div>
        <input className="CustomerDelivery" type="text" placeholder="Enter delivery instructions"></input>
        </wrapper>
      </div>
    )
  }
  
  export default Info