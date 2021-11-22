import React from 'react'
import {Link} from 'react-router-dom'
import styles from "../components/Header2.module.css";

export default function Header2() {
  return (
    <div className={styles.btn} >
      <ul>
      <button className={styles.button}> <Link to="/All">All</Link></button>
        <button className={styles.button}>
         <Link to="/Sushi">Sushi</Link>
          </button>
        <button className={styles.button}> <Link to="/pizza">Pizza</Link></button>
        <button className={styles.button}> <Link to="/hamburger">Hamburger</Link></button>
        <button className={styles.button}> <Link to="/drinks">Drinks</Link></button>
  </ul>
    </div>
  )
}
