import React from 'react'
import styles from './Recommendations.module.css';



export default function Recommendations() {
    return (

        
        <div className={styles.container}>
            
            <span  className={styles.header}>
                <span className={styles.recBox}> Restaurant 1 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
                <span className={styles.recBox}> Restaurant 2 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
                <span className={styles.recBox}> Restaurant 3 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
                <span className={styles.recBox}> Restaurant 4 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
                <span className={styles.recBox}> Restaurant 5 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
                <span className={styles.recBox}> Restaurant 6 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
                <span className={styles.recBox}> Restaurant 7 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
                <span className={styles.recBox}> Restaurant 8 <img className={styles.recPhoto} src="/food3.jpg"/> </span>
            </span>
        </div>
        
    )
}
