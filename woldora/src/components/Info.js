import React from 'react'
import './CheckoutAndInfo.css';

function Info() {
    return (
      <div className="Info">
        <wrapper>
          <h1>Delivery info</h1>
            <h5>
                <input className="CustomerName" type="text" placeholder="Enter name"></input>
            </h5>
            <h6>
                <input className="CustomerAddress" type="text" placeholder="Enter address"></input>
            </h6>
            <h7>
                <input className="CustomerNumber" type="text" placeholder="Enter phonenumber"></input>
            </h7>
            <h8>
                <input className="CustomerDelivery" type="text" placeholder="Enter delivery instructions"></input>
            </h8>
        </wrapper>
      </div>
    )
  }
  
  export default Info