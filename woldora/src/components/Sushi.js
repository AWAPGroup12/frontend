import React from 'react'
import Product from './Product'
import styles from "../components/Sushi.module.css"



export default function Sushi() {
  return (
    <div className={styles.container}>
      <Product
        image="/images/sushi1.jpg"
        name="sushi"
        price="$35"
      />

      <Product
        image="/images/sushi2.jpg"
        name="sushi"
        price="$40"
      />

      <Product
        image="/images/sushi3.jpg"
        name="sushi"
        price="$45"
      />

      <Product
        image="/images/sushi4.jpg"
        name="sushi"
        price="$50"
      />

      <Product
        image="/images/sushi5.jpg"
        name="sushi"
        price="$40"
      />

      <Product
        image="/images/sushi6.jpg"
        name="sushi"
        price="$45"
      />

    </div>
  )
}
