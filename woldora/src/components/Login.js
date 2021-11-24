import React, { useState } from 'react';
import styles from "./Login.module.css"

export default function Login() {
    return (
        <div className={styles.loginContainer}>
            <div>Login</div>
            <input type="text" />
            <input type="text" />
            <button>Log In</button>
            <div>Create Account</div>
            <div>Change Password</div>
        </div>
    )
}
