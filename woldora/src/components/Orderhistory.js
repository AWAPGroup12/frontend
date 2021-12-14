import react from 'react'
import styles from './Orderhistory.module.css'
import { Link } from 'react-router-dom'


export default function Orderhistory() {
    return (
        <div className={styles.container}>
            Order History

            <div className={styles.historydata}> 
            <div> Order 1 </div>
            <div>  Order 2 </div>
            <div>  Order 3 </div>

            </div>
        </div>
    )
}
