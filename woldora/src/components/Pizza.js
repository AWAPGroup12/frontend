import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import styles from "../components/Items.module.css"
import axios from 'axios'

export default function Pizza() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then((response) => {
      console.log(response.data)
      setPizzas(response.data)
    })

  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.container} > {pizzas.map(pizza => {
        return <div className={styles.itembox}>  {pizza.name} {pizza.price}€
          <Product image="/images/pizza1.jpg" /> </div>
      })

      } </div>

    </div>

  )
}
