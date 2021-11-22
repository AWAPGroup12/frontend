import React from 'react'
import Content from './Content'
import styles from "./Default.module.css";
export default function Product(props) {
  return (
    <div className={styles.rightbox}>
    <img src={props.image} className={styles.imageClass}/>
  <p><Content name={props.name} price={props.price}/></p>
   <button className={styles.cat}>Add to cart</button>
   </div>
 
  )
}
