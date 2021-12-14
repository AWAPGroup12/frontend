import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import styles from "../components/Items.module.css"
import axios from 'axios';

export default function Drinks() {

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('http://localhost:3001/drinks').then((response) => {
      console.log(response.data)
      setDrinks(response.data)
    })
  }, []);

  return (

    <div className={styles.container}>

      <div className={styles.container} > {drinks.map(drink => {
        return <div className={styles.itembox}>
          <div className={styles.itemname}> {drink.name} {drink.price}€ </div>
          <div> <Product image="/images/drink1.jpg" /> </div>
        </div>

      })

      } </div>

    </div>
  )
}
