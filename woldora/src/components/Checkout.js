import React, { useState } from 'react'
import styles from './CheckoutAndInfo.module.css';
import { Link } from 'react-router-dom'


function Checkout() {
  const [count, setCount] = useState(0)

  function decrementCount() {
    setCount(Count => Count - 1)
  }

  function incrementCount() {
    setCount(Count => Count + 1)
  }

  return (
    <div className={styles.CheckoutAndInfo}>

      <wrapper>
        <Link to="Orderhistory"> <button className={styles.Orderhistory}> ORDER HISTORY  </button></Link>

        <h1 className={styles.Header}> Cheese Burger

          <div onClick={decrementCount} className={styles.counter} > - </div>
          <span className={styles.counter} > {count} </span>
          <div onClick={incrementCount} className={styles.counter}> + </div>

        </h1>

        <h5>
          <Link to="Delivery"> <button className={styles.Checkout}>CHECKOUT</button> </Link>
        </h5>

      </wrapper>

      <div className={styles.infoSlot}>
        <wrapper >
          <h1 className={styles.modifyButtons}> Delivery info </h1>

          <h5 className={styles.modifyButtons} >
            <input className="CustomerName" type="text" placeholder="Enter name"></input>
          </h5>

          <h6 className={styles.modifyButtons} >
            <input className="CustomerAddress" type="text" placeholder="Enter address"></input>
          </h6>

          <h7 className={styles.modifyButtons} >
            <input className="CustomerNumber" type="text" placeholder="Enter phonenumber"></input>
          </h7>

          <h8 className={styles.modifyButtons} >
            <textarea className={styles.Instructions} placeholder="Enter delivery instructions"></textarea>
          </h8>
        </wrapper>
      </div>
    </div>
  )
}

export default Checkout

