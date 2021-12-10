import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import styles from "../components/Pizza.module.css"

export default function Pizza() {
  return (
    <div className={styles.container}>
      <Product
        image="/images/pizza1.jpg"
        name="pizza"
        price="$10"
      />

      <Product
        image="/images/pizza2.jpg"
        name="pizza"
        price="$15"
      />

      <Product
        image="/images/pizza3.jpg"
        name="pizza"
        price="$18"
      />

      <Product
        image="/images/pizza4.jpg"
        name="pizza"
        price="$10"
      />

      <Product
        image="/images/pizza5.jpg"
        name="pizza"
        price="$12"
      />

      <Product
        image="/images/pizza6.jpg"
        name="pizza"
        price="$15"
      />
    </div>

  )
}
