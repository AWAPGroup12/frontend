import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import styles from "../components/Items.module.css"
import axios from 'axios';


export default function Hamburger() {

  const [hamburgers, setHamburgers] = useState([])

  useEffect(() => {
    // Update the document title using the browser API
    axios.get('http://localhost:3001/hamburgers').then((response) => {
      console.log(response.data)
      setHamburgers(response.data)
    })
  }, []);


  return (
    <div className={styles.container}>

      <div className={styles.container} > {hamburgers.map(hamburger => {
        return <div className={styles.itembox}>

          <div className={styles.itemname}> {hamburger.name} {hamburger.price}€ </div>

          <div> <Product image="/images/hamburger2.jpg" /> </div>
        </div>

      })

      } </div>

    </div>
  )
}
