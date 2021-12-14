import React, { useEffect, useState } from 'react'
import Product from './Product'
import styles from "../components/Items.module.css"
import axios from 'axios';
import { Link } from 'react-router-dom'


export default function Sushi() {
  const [sushis, setSushis] = useState([])

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('http://localhost:3001/sushis').then((response) => {
      console.log(response.data)
      setSushis(response.data)
    })
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.container} > {sushis.map(sushi => {
        return <div className={styles.itembox}>

          <div className={styles.itemname}> {sushi.name} {sushi.price}€ </div>

          <div> <Product image="/images/sushi1.jpg" /> </div>
        </div>

      })

      } </div>

    </div>
  )
}
