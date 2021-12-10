import React, { useEffect } from 'react'
import styles from './Recommendations.module.css';
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function Recommendations() {

    useEffect(() => {
        // Update the document title using the browser API
        axios.get('http://localhost:3001/customers').then((response) => {
            console.log(response.data)
        })
    }, []);


    return (
        <>
            <div className={styles.Search}>
                <input type="text" placeholder="Search restaurant.." className="search" />
            </div>
            <div className={styles.container}>
                <span className={styles.header}>
                    <Link to="/Sushi"> <span className={styles.recBox}> Sushi Restaurant <img className={styles.recPhoto} src="/food3.jpg" /> </span> </Link>
                    <Link to="/Pizza"> <span className={styles.recBox}> Pizza Restaurant <img className={styles.recPhoto} src="/food3.jpg" /> </span> </Link>
                    <Link to="/Hamburger"> <span className={styles.recBox}> Burger Restaurant <img className={styles.recPhoto} src="/food3.jpg" /> </span> </Link>
                    <Link to="/Drinks"> <span className={styles.recBox}> Drinks <img className={styles.recPhoto} src="/food3.jpg" /> </span> </Link>
                </span>
            </div>
        </>
    )
}
