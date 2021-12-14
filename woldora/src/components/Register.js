import React from 'react'
import styles from './Register.module.css';
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <div className={styles.registerContainer}>
            <div>Create account</div>

            <div className={styles.inputBox}>Name
                <input type="text" />
            </div >

            <div className={styles.inputBox}>Address
                <input type="text" />
            </div>

            <div className={styles.inputBox}>Email
                <input type="enail" />
            </div>

            <div className={styles.inputBox}>Phone
                <input type="text" />
            </div>

            <div className={styles.inputBox1}>Password
                <input type="password" />
            </div>

            <button> Create Account </button>

        </div>

    )
}