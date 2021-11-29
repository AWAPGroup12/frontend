import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom'


export default function Header() {


  return (
    
    <>
    
    <div className={styles.awapfoodBackground}>
    
      <div className={styles.container}>
      <Link to="/"> <div className={styles.awapfood}> Woldora </div> </Link>
      
        <div className={styles.logIn}> 
        <Link to="Login">  <button> Log in </button> </Link>
        <Link to="ShoppingCart"> <button> Shopping Cart </button>  </Link>
        </div>

       </div>
        
    

     </div>

     </>


  )
}