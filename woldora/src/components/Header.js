import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Header() {


  return (

    <>

      <div className={styles.awapfoodBackground}>

        <div className={styles.container}>
          <Link to="/"> <div className={styles.awapfood}> Woldora </div> </Link>
          
          <div className={styles.logIn}>
            <Link to="Login">  <div className={styles.Cart}> Log in </div> </Link>
            <Link to="Checkout"> <div className={styles.Cart}><AiOutlineShoppingCart /> </div>  </Link>
          </div>

        </div>
      </div>

    </>


  )
}