import React from 'react'
import styles from "../components/Heading.module.css";
import { Link } from "react-router-dom";
export default function Heading2() {
  return (
    <div className={styles.hen}>
      
      <div> <Link to='/newrestaurant'><button>Add a new restaurant menu</button></Link>
          </div>    <div>
      <Link to='/newrestaurantmenu'><button>Create a new restaurant</button></Link>
      </div>
    </div>
  )
}

