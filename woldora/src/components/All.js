import React from 'react';
import Product from './Product'
import { Link } from 'react-router-dom'

export default function All() {
  return (
    <div>
      <Product
        image="/images/sushi1.jpg"
        name="sushi"
        price="$35" />
      <Product
        image="/images/sushi2.jpg"
        name="sushi"
        price="$40" />
      <Product
        image="/images/sushi3.jpg"
        name="sushi"
        price="$45" />
      <Product
        image="/images/sushi4.jpg"
        name="sushi"
        price="$50" />
      <Product
        image="/images/sushi5.jpg"
        name="sushi"
        price="$40" />
      <Product
        image="/images/sushi6.jpg"
        name="sushi"
        price="$45" />

      <Product
        image="/images/pizza1.jpg"
        name="pizza"
        price="$10" />
      <Product
        image="/images/pizza2.jpg"
        name="pizza"
        price="$15" />
      <Product
        image="/images/pizza3.jpg"
        name="pizza"
        price="$18" />
      <Product
        image="/images/pizza4.jpg"
        name="pizza"
        price="$10" />
      <Product
        image="/images/pizza5.jpg"
        name="pizza"
        price="$12" />
      <Product
        image="/images/pizza6.jpg"
        name="pizza"
        price="$15" />

      <Product
        image="/images/hamburger1.jpg"
        name="Hamburger"
        price="$12" />
      <Product
        image="/images/hamburger2.jpg"
        name="Hamburger"
        price="$15" />
      <Product
        image="/images/hamburger3.jpg"
        name="Hamburger"
        price="$18" />
      <Product
        image="/images/hamburger4.jpg"
        name="Hamburger"
        price="$8" />
      <Product
        image="/images/hamburger5.jpg"
        name="Hamburger"
        price="$10" />
      <Product
        image="/images/hamburger6.jpg"
        name="Hamburger"
        price="$12" />

      <Product
        image="/images/drink1.jpg"
        name="Coca-cola"
        price="$3" />
      <Product
        image="/images/drink2.jpg"
        name="Sprite"
        price="$2" />
      <Product
        image="/images/drink3.jpg"
        name="Sprite"
        price="$3" />
      <Product
        image="/images/drink4.jpg"
        name="Pepsi"
        price="$2" />
      <Product
        image="/images/drink5.jpg"
        name="Fanta"
        price="$3" />
      <Product
        image="/images/drink6.jpg"
        name="Sprite"
        price="$3" />

    </div>
  )
}