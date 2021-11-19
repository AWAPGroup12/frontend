import React from 'react'
import styles from './Register.module.css';

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
                <input type="text" />
            </div>
            <div className={styles.inputBox}>Phone
                <input type="text" />
            </div>
            <div className={styles.inputBox}>Password
                <input type="text" />
            </div>
            <button> Create Account </button>
        </div>
    )
}
