import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom'


export default function Header() {


  return (
    
    
    <div className={styles.awapfoodBackground}>



     <Link to="Orderhistory">  <button> Order History </button> </Link>
    
      <div className={styles.container}>
        <div className={styles.awapfood}> AWAP Food

        <div className={styles.logIn}> 
             <button> Log in </button> 
             <button> Cart </button>
        </div>

       </div>
        
    

     </div>

     

    </div>

  )
}