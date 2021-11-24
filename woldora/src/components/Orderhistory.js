import React from 'react'
import styles from './Orderhistory.module.css'



export default function Orderhistory() {
    return (
        <div className={styles.container}>
            Order History

            <div className={styles.historydata}> 
            <div> Order History </div>
            <div> 40 kpl Chicken McNuggets™ + 6 dippiä. 19,10 € </div>
            <div> Ben & Jerry’s Half Baked 465ml. 8,90 € </div>
            <div> Large Pepperoni Stuffed Cheesy Crust & Pepsi Max 1,5l 20€ </div>

            </div>
        </div>
    )
}
