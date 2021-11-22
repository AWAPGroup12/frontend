import React from 'react'
import styles from "./Delivery.module.css";

export default function Delivery() {
    return (
        <div className={styles.deliveryContainer}>
            <div>
                <span>Estimated delivery time:</span>
                <span> 1h 5min </span>
            </div>
            <div className={styles.deliveryInfo}>
                <div className={styles.item}>
                    <span> Delivery contents here... </span>
                    <span className={styles.itemPrice}> 25€ </span>
                </div>
                <div className={styles.item}>
                    <span> And here...</span>
                    <span className={styles.itemPrice}> 25€ </span>
                </div>
                <div className={styles.payment}>
                    <span> Payment:</span>
                    <span> Credit </span>
                </div>
                <div className={styles.price}>
                    <span> Total price:</span>
                    <span> 50€ </span>
                </div>
            </div>
        </div>
    )
}
