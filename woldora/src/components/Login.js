import React, { useState } from 'react';
import styles from "./Login.module.css"
import { Link } from 'react-router-dom'



export default function Login() {
    return (
        <div className={styles.loginContainer}>

            <div className={styles.loginContainer}>Email
                <input type="text" />
            </div>

            <div className={styles.loginContainer}>Password
                <input type="Password" />
            </div>

            <button>Log In</button>

            <Link to="Register"> <div>Create Account</div> </Link>

            <div>Change Password</div>
        </div>
    )
}
