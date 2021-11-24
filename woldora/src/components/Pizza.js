import React from 'react'
import Product from './Product'
export default function Pizza() {
  return (
    <div>
      <Product image="/images/pizza1.jpg" name="pizza" price="$10"></Product>
       <Product image="/images/pizza2.jpg" name="pizza" price="$15"></Product>
       <Product image="/images/pizza3.jpg" name="pizza" price="$18"></Product>
       <Product image="/images/pizza4.jpg" name="pizza" price="$10"></Product>
       <Product image="/images/pizza5.jpg" name="pizza" price="$12"></Product>
       <Product image="/images/pizza6.jpg" name="pizza" price="$15"></Product>
    </div>

  )
}
