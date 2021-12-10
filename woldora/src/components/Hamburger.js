import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import styles from "../components/Hamburger.module.css"

export default function Hamburger() {
  return (
    <div className={styles.container}>
      <Product
        image="/images/hamburger2.jpg"
        name="Hamburger"
        price="$12"
      />

      <Product
        image="/images/hamburger1.jpg"
        name="Cheese burger"
        price="$15"
      />

      <Product
        image="/images/hamburger3.jpg"
        name="Bacon burger"
        price="$18"
      />

      <Product
        image="/images/hamburger4.jpg"
        name="Double Cheese burger"
        price="$8"
      />

    </div>
  )
}
