import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import styles from "../components/Drinks.module.css"

export default function Drinks() {
  return (
    <div className={styles.container}>
      <Product
        image="/images/drink1.jpg"
        name="Coca-cola"
        price="$3"
      />

      <Product
        image="/images/drink2.jpg"
        name="Sprite"
        price="$2"
      />

      <Product
        image="/images/drink3.jpg"
        name="Sprite"
        price="$3"
      />

      <Product
        image="/images/drink4.jpg"
        name="Pepsi"
        price="$2"
      />

      <Product
        image="/images/drink5.jpg"
        name="Fanta"
        price="$3"
      />

      <Product
        image="/images/drink6.jpg"
        name="Sprite"
        price="$3"
      />
    </div>
  )
}