import React from 'react'
import styles from './Header.module.css';



export default function Header() {


  return (
    <div className={styles.awapfoodBackground}>

      <div className={styles.container}>
        <div className={styles.awapfood}> AWAP Food </div>
        <div className={styles.logIn}> Log in</div>
        <div className={styles.Cart}> Cart</div>
      </div>

    </div>

  )
}